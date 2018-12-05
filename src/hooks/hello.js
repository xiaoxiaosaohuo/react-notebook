// import { useState } from 'react';
let reset  = true;
const  Hello =  () => {
    debugger;
  // Declare a new state variable, which we'll call "count"
  const [data, setCount] = React.useState({count:0});
  let name ,setName;
  if(reset){
     [name, setName] = React.useState("Mary");
  }
  
  const [subname, setSubname] = React.useState("金鑫");
  const onClick = ()=>{
      debugger;
      reset = false
    return setCount({count:data.count + 1})
  }
  const onDivClick = ()=>{
    return setName("点击后")
  }
  return (
    <div onClick={onDivClick}>
      <p>You clicked {data.count} times</p>
      <button onClick={onClick}>
        Click me
      </button>
      <h1>{`${name}-${subname}`}</h1>
    </div>
  );
}

export default Hello