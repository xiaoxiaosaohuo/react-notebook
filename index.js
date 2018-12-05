// import React from "react";
// import ReactDOM from "react-dom";
const mountNode = document.getElementById("root");

const ChildCmp = ({ msg})=> {
  return <div>{msg}</div>
    }
const data = [
    {name:"liutao",key:11},
    {name:"jinxin",key:33},
    {name:"刘德华",key:22}
]
class ExampleApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, show: false, dataSource: data, inputvalue:"" };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    // this.setCount();
    // debugger;
    // this.setCount()
    // console.log("componentDidMount")
    // setTimeout(()=> {
    // new Promise((resolve)=>{
    //     resolve()
    // }).then(()=>{
    //     // debugger;
    //     this.setCount()
    // })
    // }, 2000);
    // let button = document.querySelector("button");
    // console.log(button)
    // button.addEventListener("click", function(e) {
    //     e.stopPropagation();
    //     alert(333);
    //   }, false);
    // button.addEventListener("click", function() {
    //     e.stopPropagation();
    //   alert(222);
    // },true);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log("componentDidUpdate");
    // if (prevState.count === 0) {
    //   debugger;
    //   this.setCount();
    // }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      count: this.state.count + 1,
      show: "sdfjlsf"
    });
    this.setState({
      count: this.state.count + 2,
      text: "2323234"
    });
  };
  setCount1 = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  onChage = (e)=>{
    this.setState({
      inputvalue:e.target.value
    })
  }
  onClickHandler = () => {
    this.setCount1();
    // Promise.resolve(1)
    // .then(json=>{
    //   console.log(json)
    //   this.setCount();
    // })
    // this.setCount()
    // this.setState(prevState => {
    //     const json = prevState.dataSource.map((item,index)=>{
    //         return { ...item, name: item.name + index +"改变"}
    //     }).sort((a,b)=>{return Math.random()-0.5});
    //   return {
    //       dataSource: json,
    //       count: prevState.count+1
    //   }
    // });
  };
  onItemClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { dataSource, count, inputvalue } = this.state;
    const classp = count===1?"red-p":"blue-p"
    console.log(this)
    return <div>
        <button onClick={this.onClickHandler} >set state button </button>
      <ChildCmp msg={count}></ChildCmp>
        {/* {count === 0 ? <span>type要变化</span> : <h1>变化后的</h1>} */}
      {/* <input onChange={this.onChage} value={inputvalue}/> */}
        {/* {dataSource.map(item => {
          return (
            <h1 key={item.key} >
              {item.name}
            </h1>
          );
        })} */}
      {/* <p style={{ color: "red" }} className={classp} key={count}>{count}</p> */}
      </div>;
  }
}
ReactDOM.render(
    <ExampleApplication><ExampleApplication/></ExampleApplication>,
    mountNode,
    function() {}
);