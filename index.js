
  const mountNode = document.getElementById("root");

  const ChildCmp =({childMessage})=> {
        return <div>{childMessage}</div>
    }

class ExampleApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            show:false
        };
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
        let button = document.querySelector("button");
        console.log(button)
        button.addEventListener("click", function(e) {
            e.stopPropagation();
            alert(333);
          }, false);
        button.addEventListener("click", function() {
            e.stopPropagation();
          alert(222);
        },true);
        
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
        this.setState({
            count:this.state.count+1
        })
        this.setState({
            count:this.state.count+1,
            show:"sdfjlsf"
        })
        this.setState({
            count:this.state.count+1,
            text:"2323234"
        })
    }

    onClickHandler=()=> {
        debugger;
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
        debugger;
        console.log("render")
        return <div>
            <button onClick={this.onClickHandler}> set state button </button>
            <ChildCmp childMessage={this.state.count} />
            {/* {this.state.text} */}
        </div>
    }
}
debugger;
ReactDOM.render(
    <div className="test">测试<span>子元素</span></div>,
    mountNode,
    function() {}
);