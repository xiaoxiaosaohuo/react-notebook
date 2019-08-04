const array01 = [1,2,3,4]

const  Hello =  () => {
  debugger;
  const [count, setCount] = React.useState(0);
  
  const [name, setName] = React.useState("test");
  const onClick = ()=>{
    // const arr = [1,4,2,3]
    setCount(count+1);
    // setName('hello world');
  }
  React.useEffect(() => {
    debugger;
    document.title = `You clicked ${count} times`;
    
  },[count]);
  React.useEffect(() => {
    debugger;
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  },[name]);
  return (
    <React.Fragment>
      <div style={{'backgroundColor':'red','height':100}} onClick={onClick}>click me </div>
      <p>{count}</p>
    </React.Fragment>
  );
}

export default Hello