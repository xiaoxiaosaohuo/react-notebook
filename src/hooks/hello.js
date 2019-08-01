const  Hello =  () => {
  const [count, setCount] = React.useState(0);
  
  const [subname, setSubname] = React.useState("金鑫");
  const onClick = ()=>{
    setCount(count + 1)
    // setSubname("点击后");
  }
  const onDivClick = ()=>{
    return setSubname("点击后")
  }
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  },[]);
  return (
    <div>
      <p key={count}>{count}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default Hello