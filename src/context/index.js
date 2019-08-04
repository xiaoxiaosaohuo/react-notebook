const calculateChangedBits = (currentValue, nextValue) =>
currentValue.name !== nextValue.name ? 0b10 : 0b00;

const UserContext = React.createContext(null,calculateChangedBits);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "beforeUpdate"
    };
  }
  setName = () => {
    this.setState(state => ({
      name: state.name === "beforeUpdate" ? "afterUpdate" : "beforeUpdate"
    }));
  };
  render() {
    return (
        <UserContext.Provider value={{ name: this.state.name ,setName:this.setName}}>
         <Indirection>
          <User />
        </Indirection>
        </UserContext.Provider>
    );
  }
}

function User() {
  return (
    <UserContext.Consumer unstable_observedBits={0b10}>
      {({name,setName}) => (
        <button
        onClick={setName}
          >
          {name}
          <UserContext.Consumer unstable_observedBits={0b10}>
            {({name,setName}) => (
              <p
              onClick={setName}
                >
                {name}
              </p>  
            )}
            </UserContext.Consumer>
        </button>
      )}
      
    </UserContext.Consumer>
  );
}
class Indirection extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return this.props.children;
  }
}


export default App;
