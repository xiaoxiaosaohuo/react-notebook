import ReactRedux from "./src/demo";
// import Raven from "raven-js";
// import { sentry_url, logException } from "./src/mointor";
const mountNode = document.getElementById("root");
// Raven.config(sentry_url, {
//   tags: {
//     git_commit: "fffg",
//     userLevel: "editor"
//   }
// }).install();
// import SelectTickets from './src/counter';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        a:1
    }
  }
  changeState= ()=>{
    this.setState({
      a:2
    })
    this.setState({
      a:3
    })
    console.log(this.state)
  }
  onClick = () =>{
    this.setState((prevState, nextProps) => {
        return {a:prevState.a + 1};
      })
      this.setState((prevState, nextProps) => {
        return {a:prevState.a + 1};
      })
      this.setState((prevState, nextProps) => {
        return {a:prevState.a + 1};
      })
      this.setState((prevState, nextProps) => {
        return {a:prevState.a + 1};
      })
  

  }
  componentDidMount(){
    
  }
  render() {
    // logException(new Error("download failed"), {
    //   email: "jinxin479@126.com"
    // });
    console.log(this.state)
    return <div>
        <button onClick={this.onClick}>点我</button>
    </div>
  }
}
debugger;
ReactDOM.render(<ReactRedux/>, mountNode);
