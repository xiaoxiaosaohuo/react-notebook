
import { connect } from '../react-redux';

import {
  incrementAction,
  decreaseAction,
} from './actions';

class Page extends React.PureComponent {
  render() {
    const { value, incrementAction, decreaseAction } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={incrementAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
