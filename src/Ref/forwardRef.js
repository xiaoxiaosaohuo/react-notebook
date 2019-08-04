
debugger
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" {...props}>
      {props.children}
    </button>
  ));
  
  // You can now get a ref directly to the DOM button:
class App extends React.Component{
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }
  onClick  = ()=>{
    console.log(this.ref)
  }
  render(){
    return(
      <div>
        <FancyButton ref={this.ref} onClick={this.onClick}>Click me!</FancyButton>

      </div>
    )
  }
}

export default App;

