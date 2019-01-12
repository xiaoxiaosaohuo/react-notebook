
import {ThemeContext, themes} from './theme';
import ThemedButton from './button';
import ThemeTogglerButton from './toggler-button';
import UserContext from "./userContext";
import User from "./user";
class App extends React.Component {
  constructor(props) {
    super(props);
    
      this.state = {
        theme: themes.light,
		toggleTheme: this.toggleTheme,
		name:"jinxin"
      };
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
		  : themes.dark,
		name:state.name==="siven"?"jinxin":"siven"
    }));
  }
  render() {
    console.log(ThemeContext.Provider);
    return (
        <ThemeContext.Provider value={this.state}>
            <UserContext.Provider value={{name:this.state.name}}>
              <Content />
            </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Content() {
    return (
      <div>
        <ThemeTogglerButton />
        <User></User>
      </div>
    );
  }

export default App