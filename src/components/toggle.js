
import './index.css';
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));
export default class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = this.initialState;
    }
    initialState = { on: this.props.initialOn }
    static defaultProps = {
        initialOn: false,
        onReset: () => { },
    }
    toggle = () =>{
        this.setState(({ on }) => ({ on: !on }),()=>{
            this.props.onToggle(this.state.on);
        });
    }
    reset = () =>
        this.setState(this.initialState, () =>
            this.props.onReset(this.state.on)
    )
    getTogglerProps = ({ onClick, ...props}) => {
        return {
            'aria-pressed': this.state.on,
            onClick: callAll(onclick, this.toggle),
            ...props,
        }
    } 
    render() {
        return this.props.children({
            on: this.state.on,
            getTogglerProps: this.getTogglerProps,
            reset: this.reset
        });
    }
}
export const Switch = ({ on, className = '', ...props })=> {
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