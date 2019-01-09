
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
        stateReducer: (state, changes) => changes,
    }
    static stateChangeTypes = {
        reset: '_reset_',
        toggle: '_toggle_',
    }
    toggle = ({ type = Toggle.stateChangeTypes.toggle}={}) =>{
        // debugger;
        this.internalSetState(
            ({ on }) => ({ on: !on, type: type }),
            () => this.props.onToggle(this.state.on),
        )
    }
    
    reset = () =>{
        this.internalSetState(
            { ...this.initialState, type: Toggle.stateChangeTypes.reset },
          () => this.props.onReset(this.state.on)
        );
    }
    internalSetState(changes, callback) {
        this.setState(state => {
            const changesObject =
                typeof changes === 'function' ? changes(state) : changes

            const reducedChanges = this.props.stateReducer(
                state,
                changesObject,
            )||{}

            const { type: ignoredType, ...onlyChanges } = reducedChanges
            return Object.keys(onlyChanges).length ? onlyChanges : null
        }, callback)
    }
        
    getTogglerProps = ({ onClick, ...props}={}) => {
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
            reset: this.reset,
            toggle: this.toggle,
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