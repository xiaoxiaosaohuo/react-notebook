import React, { Component } from 'react'
const data1 = [
    {name:1},
    { name: 2 },
    { name: 3 },
    { name: 4 }
]
class TestKey extends Component {
    constructor(props){
        super(props);
        this.state = { data: data1 };
    }
    handleDelete = ()=>{
        this.setState(prevState=>{
            return{
                data:prevState.data.slice(0,1).concat(prevState.data.slice(2))
            }
        })
    }
  render() {
      const {data} = this.state;
    return (
      <div>
        {data.map((item, index) => {
          return (
            <h2 key={item.name} data-title={item.name} onClick={this.handleDelete}>
              {item.name}
            </h2>
          );
        })}
      </div>
    );
  }
}

export default TestKey;