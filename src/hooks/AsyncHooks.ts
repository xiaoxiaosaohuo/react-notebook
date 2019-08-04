import * as React from 'react';

interface AsyncState<T> {
  loading: boolean
  data: T | undefined
  error: Error | undefined
}

interface Action {
  type: string
  payload?: any
}

type AsyncReducer<T> = (
  prevState: AsyncState<T>,
  action: Action
) => AsyncState<T>

const initialState: AsyncState<any> = {
  loading: false,
  data: undefined,
  error: undefined
}

const reducer: AsyncReducer<any> = (state, action) => {
  switch (action.type) {
    case 'LOAD_START':
      return { ...state, loading: true }
    case 'LOAD_SUCCESS':
      return { loading: false, data: action.payload, error: undefined }
    case 'LOAD_FAILURE':
      return { loading: false, data: undefined, error: action.payload }
    default:
      return state
  }
}

export default function useAsync<T = any>(
  fn: (prevData: T) => Promise<T>,
  deps: ReadonlyArray<any>
) {
  const refMounted = React.useRef(false)
  const [state, dispatch] = React.useReducer<AsyncReducer<T>>(
    reducer,
    initialState
  )

  const invoke = React.useCallback((prevData: any) => {
    const promise = fn(arguments.length ? prevData : state.data)

    if (!(promise instanceof Promise)) {
      return Promise.resolve()
    }

    dispatch({ type: 'LOAD_START' })

    return promise
      .then(
        (data) =>
          refMounted.current &&
          dispatch({ type: 'LOAD_SUCCESS', payload: data })
      )
      .catch(
        (error) =>
          refMounted.current &&
          dispatch({ type: 'LOAD_FAILURE', payload: error })
      )
  }, deps)

  React.useEffect(() => {
    refMounted.current = true
    return () => {
      refMounted.current = false
    }
  }, [])

  React.useEffect(() => {
    invoke()
  }, [invoke])

  return { ...state, invoke }
}