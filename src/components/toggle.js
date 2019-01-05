
import './index.css';
const ToggleContext = React.createContext({
    on: false,
    toggle: () => {}
});
function ToggleConsumer(props) {
    return <ToggleContext.Consumer>
        {context => {
            console.log(context)
            if (!context) {

                throw new Error(
                    'Toggle compound components must be rendered within the toggle component'
                )
            }
            return props.children(context)
        }}
      </ToggleContext.Consumer>;
}
export default class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { on: false, toggle: this.toggle };
    }
    static On = ({ children }) => (
        <ToggleConsumer>
            {({on})=>on?children:null}
        </ToggleConsumer>
    );
    static Off = ({ children }) => (
        <ToggleConsumer>
            {({ on }) => on ? null : children}
        </ToggleConsumer>
    )
    static Button = (props) => (
        <ToggleConsumer>
            {({on,toggle})=>(
                <Switch on={on} onClick={toggle} {...props} />
            )}
        </ToggleConsumer>
        
    );
    toggle = () =>{
        this.setState(({ on }) => ({ on: !on }),()=>{
            this.props.onToggle(this.state.on);
        });
    }
        
    render() {
        return <ToggleContext.Provider value={this.state}>
            {this.props.children}
          </ToggleContext.Provider>;
    }
}
const Switch = ({ on, className = '', ...props })=> {
    return (
        <div className="toggle">
            <input
                className="toggle-input"
                type="checkbox"
            />
            <button
                className={`${className} toggle-btn ${on
                    ? 'toggle-btn-on'
                    : 'toggle-btn-off'}`}
                aria-expanded={on}
                {...props}
            />
        </div>
    )
}