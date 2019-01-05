
const mountNode = document.getElementById("root");
import Toggle from './src/components/toggle';
class App extends React.Component {
  constructor(props) {
      super(props);
    }
    onToggle = (...args) => console.log('onToggle', ...args);
    render() {
      return (
        <div style={{ width: 500 }}>
          <Toggle onToggle={this.onToggle}>
            <Toggle.On>The button is on</Toggle.On>
            <Toggle.Off>The button isoff</Toggle.Off>
            <div>
              <Toggle.Button />
            </div>
          </Toggle>
        </div>
      )
    }
}
ReactDOM.render(
     <App />,
    mountNode,
    function() {}
);