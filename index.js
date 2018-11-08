
  const mountNode = document.getElementById("root");

  const ChildCmp =({childMessage})=> {
        return <div>{childMessage}</div>
    }

class ExampleApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text:"notClicked"
        };
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
      console.log("componentDidMount")
        /* setTimeout(()=> {
            this.setState({ message: 'timeout state message' });
        }, 1000); */
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        console.log("componentDidUpdate")
    }


    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    onClickHandler() {
        this.setState(prevState=>{
            return { 
                count: prevState.count+1,
                text:"hasClicked" 
            }
        });
        this.setState(prevState=>{
            return { count: prevState.count+1 }
        });

    }

    render() {
        debugger;
        return <div>
            <button onClick={this.onClickHandler.bind(this)}> set state button </button>
            <ChildCmp childMessage={this.state.count} />
            {this.state.text}
        </div>
    }
}
debugger;
ReactDOM.render(
    <ExampleApplication></ExampleApplication>,
    mountNode,
    function() {}
);