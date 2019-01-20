
const mountNode = document.getElementById("root");
// import ContextUsage from './src/context';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			count:1
		}
	}
	setCount = ()=>{
		new Promise(resolve => {
      	resolve(1);
    	}).then(res=>{
			this.setState({count:this.state.count+1});
			console.log(this.state.count)
			this.setState({ count: this.state.count + 1 })
			this.setState({ count: this.state.count + 1 })
		});
	}
	componentDidMount() {
		this.setCount()
	}
	render(){
		console.log(this.state)
		return(
			<div>jj</div>
			// <ContextUsage></ContextUsage>
		)
	}
	
}
ReactDOM.render(
	<App/>,
	mountNode
);