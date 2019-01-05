
const mountNode = document.getElementById("root");
import Toggle,{Switch} from './src/components/toggle';
class App extends React.Component {
  constructor(props) {
      super(props);
    }
    onToggle = (...args) => console.log('onToggle', ...args);
    render() {
      return (
        <div style={{ width: 500 }}>
          <Toggle 
          onToggle={this.onToggle}
            initialOn={true}
          onReset={(...args) => console.log('onReset', ...args)}
          >
            {({ on, reset,getTogglerProps }) => {
              return <div>
                  {on ? "The button is on" : "The button is off"}
                  <Switch on={on} {...getTogglerProps({ on })} />
                  <hr />
                  <button {...getTogglerProps({
                      "aria-label": "custom-button",
                      id: "custom-button-id",
                      onClick: this.onToggle
                    })}>
                    {on ? "on" : "off"}
                  </button>
                  <button onClick={reset} >reset</button>
                </div>;
            }}
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