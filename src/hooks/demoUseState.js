/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-29 20:59:56
 * @LastEditTime: 2019-10-30 14:47:54
 * @LastEditors: Please set LastEditors
 */
import React, { useState } from "react";
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    setCount = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render(){
        return(
            <React.Fragment>
            <button style={{'backgroundColor':'green','height':20}} onClick={tihs.setCount}> click me </button>
            <p>{this.state.count}</p>
          </React.Fragment>
        )
    }

}


const  DemoUseState =  () => {
    const [count, setCount] = React.useState(0);
    return (
      <React.Fragment>
        <button style={{'backgroundColor':'green','height':20}} onClick={()=>{setCount(count+1)}}> click me </button>
        <p>{count}</p>
      </React.Fragment>
    );
}
  
  export default DemoUseState