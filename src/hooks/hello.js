const  Hello =  () => {
  const [count, setCount] = React.useState(0);
  
  const [subname, setSubname] = React.useState("金鑫");
  const onClick = ()=>{
    return setCount(count + 1)
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
    <div onClick={onDivClick}>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>
        Click me
      </button>
      <h1>{`${name}-${subname}`}</h1>
    </div>
  );
}

export default Hello