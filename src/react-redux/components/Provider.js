
import { ReactReduxContext } from './Context'
import Subscription from '../utils/Subscription'

class Provider extends React.Component {
  constructor(props) {
    super(props)
    debugger;
    const { store } = props

    this.notifySubscribers = this.notifySubscribers.bind(this)
    const subscription = new Subscription(store)
    subscription.onStateChange = this.notifySubscribers

    this.state = {
      store,
      subscription
    }

    this.previousState = store.getState()
  }

  componentDidMount() {
    this.state.subscription.trySubscribe()

    if (this.previousState !== this.props.store.getState()) {
      this.state.subscription.notifyNestedSubs()
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe()

    this.state.subscription.tryUnsubscribe()
  }

  componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      this.state.subscription.tryUnsubscribe()
      const subscription = new Subscription(this.props.store)
      subscription.onStateChange = this.notifySubscribers
      this.setState({ store: this.props.store, subscription })
    }
  }

  notifySubscribers() {
    this.state.subscription.notifyNestedSubs()
  }

  render() {
    const Context = this.props.context || ReactReduxContext

    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}



export default Provider
