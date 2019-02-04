const mountNode = document.getElementById("root");
import ContextUsage from "./src/context";
// import SelectTickets from './src/counter';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ContextUsage />;
  }
}
ReactDOM.render(<App />, mountNode);
