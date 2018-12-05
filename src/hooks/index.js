import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add One to {count}</button>
        </div>
    );
};

export default App;


const ParentComponent = () => {
    const [name, setName] = useState()

    return (
        <ChildComponent toUpperCase={setName} />
    )
}

const ChildComponent = (props) => {
    useEffect(() => {
        props.toUpperCase((state) => state.toUpperCase())
    }, [true])

    return null
}


const ChildComponent = () => {
    useState('foo')
    useState('bar')
    useState('baz')

    return null
}

const ParentComponent = () => {
    const childFiberRef = useRef()

    useEffect(() => {
        let hookNode = childFiberRef.current.memoizedState

        assert(hookNode.memoizedState, 'foo')
        hookNode = hooksNode.next
        assert(hookNode.memoizedState, 'bar')
        hookNode = hooksNode.next
        assert(hookNode.memoizedState, 'baz')
    })

    return (
        <ChildComponent ref={childFiberRef} />
    )
}