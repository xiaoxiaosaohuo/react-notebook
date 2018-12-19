
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
      };
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }
  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
        <ThemeContext.Provider value={this.state}>
            <UserContext.Provider value={{name:"jinxin"}}>
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