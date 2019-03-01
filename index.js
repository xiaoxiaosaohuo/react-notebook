import Hello from "./src/hooks/hello";
import Raven from "raven-js";
import { sentry_url, logException } from "./src/mointor";
const mountNode = document.getElementById("root");
Raven.config(sentry_url, {
  tags: {
    git_commit: "fffg",
    userLevel: "editor"
  }
}).install();
// import SelectTickets from './src/counter';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // logException(new Error("download failed"), {
    //   email: "jinxin479@126.com"
    // });
    return <Hello/>;
  }
}
ReactDOM.render(<App />, mountNode);
