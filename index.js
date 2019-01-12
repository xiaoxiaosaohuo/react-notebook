
const mountNode = document.getElementById("root");
import ContextUsage from './src/context';
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<ContextUsage></ContextUsage>
		)
	}
	
}
ReactDOM.render(
	<App/>,
	mountNode
);