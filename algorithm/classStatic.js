class App{
    // static modules = [];
    constructor(props){
        this.props = props;
    }
    static use (module){
        Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    }
}
App.modules = [];
App.use('1')
let app = new App("a");
console.log(App);