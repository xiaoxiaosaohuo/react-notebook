/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 13:16:57
 * @LastEditTime: 2019-08-19 19:42:18
 * @LastEditors: Please set LastEditors
 */
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
    
  }
  onClick = () =>{
    

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
ReactDOM.render(<App/>, mountNode);
