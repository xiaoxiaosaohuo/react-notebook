// import Hello from "./src/hooks/hello";
// import ContextButton from "./src/context";
const mountNode = document.getElementById("root");

const ChildCmp =({childMessage})=> {
        return <div>{childMessage}</div>
    }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            show:false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.start = null;
        this.progress = 0;
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        // debugger;
        // this.setCount()
        // console.log("componentDidMount")
        
        // setTimeout(()=> {
            
            // new Promise((resolve)=>{
            //     resolve()
            // }).then(()=>{
            //     debugger;
            //     this.setCount()
            // })
            
        // }, 2000); 
        // const  step = (timestamp)=> {
        //     if (!this.start) this.start = timestamp;
        //     console.log(timestamp-this.start);
        //     this.start = timestamp;
        //     this.progress++;
        //     if (this.progress < 20) {
        //       window.requestAnimationFrame(step);
        //     }
        //   }
          
        //   window.requestAnimationFrame(step);
        // this.requestIdleCallbackFuc()
          
    }
    requestIdleCallbackFuc = ()=>{
        window.requestIdleCallback((deadline)=>{
            console.log(deadline);
            console.log(deadline.timeRemaining())
        })
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
    setCount = ()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })

    }

    onClickHandler() {
    //    this.requestIdleCallbackFuc()
        this.setCount()
        // this.setState(prevState=>{
        //     return { 
        //         count: prevState.count+1,
        //         text:"hasClicked" 
        //     }
        // });
        // this.setState(prevState=>{
        //     return { count: prevState.count+1 }
        // });

    }

    render() {
        return <div>
            <button key="1" onClick={this.onClickHandler}>Update counter</button>
            <span key="2">{this.state.count}</span>
            
        </div>

    }
}

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        debugger;
        this.setState((state) => {
            return {count: state.count + 1};
        });
        this.setState((state) => {
            return {count: state.count + 2};
        });
    }
    componentDidUpdate(){
        
    }


    render() {
        return (<React.Fragment>
            <button key="1" onClick={this.handleClick}>点我</button>
            <span key="2">{this.state.count}</span>
            </React.Fragment>
        )
    }
}
debugger;
ReactDOM.render(
    <App1></App1>,
    mountNode,
    function() {}
);