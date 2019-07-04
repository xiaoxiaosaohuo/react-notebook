class IgnoreFirstChild extends React.Component {
    render () {
      const children = this.props.children;
      debugger;
      return (
        <div>
          {
              React.Children.map(children, (child, i) => {
                if ( i < 1 ) return;
                return child;
              })
          }
        </div>
      );
    }
  }
  export default class  App extends React.Component {
      render(){
          return(
            <IgnoreFirstChild>
            <h1>First</h1>
            <h1>Second</h1>
            <h1>Third</h1>
            </IgnoreFirstChild>
          )
      }
  }