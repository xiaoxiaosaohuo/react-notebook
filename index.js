
const mountNode = document.getElementById("root");
import Toggle, { Switch } from './src/components/toggle';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState;
	}
	initialState = { timesClicked: 0 }
	onToggle = (...args) => {
		this.setState(mystate => {
			console.log(mystate)
			let { timesClicked } = mystate
			return {
				timesClicked: timesClicked + 1,
			}
		})
	}
	handleReset = (...args) => {
		this.setState(this.initialState)
	}
	toggleStateReducer = (state, changes) => {
		if (changes.type === 'forced') {
			return changes
		}
		if (this.state.timesClicked >= 4) {
			return { ...changes, on: false }
		}
		return changes
	}
	render() {
		const { timesClicked} = this.state;
		return (
			<div style={{ width: 500 }}>
				<Toggle
					onToggle={this.onToggle}
					initialOn={true}
					stateReducer={this.toggleStateReducer}
					onReset={ this.handleReset}
				>
					{({ on, reset, toggle,getTogglerProps }) => {
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
							{timesClicked > 4 ? (
								<div data-testid="notice">
									Whoa, you clicked too much!
								<br />
								</div>
							) : timesClicked > 0 ? (
								<div data-testid="click-count">
									Click count: {timesClicked}
								</div>
							) : null}
							<button onClick={reset} >reset</button>
							<button onClick={() => toggle({ type: 'forced' })}>
								Force Toggle
                			</button>
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
	function () { }
);