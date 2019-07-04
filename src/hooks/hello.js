const array01 = [1,2,3,4]

const  Hello =  () => {
  // debugger;
  const [arr, setCount] = React.useState(array01);
  
  // const [subname, setSubname] = React.useState("test");
  const onClick = ()=>{
    const arr = [1,4,2,3]
    setCount(arr);
    // setSubname('hello world');
  }
  // React.useEffect(() => {
  //   // debugger;
  //   document.title = `You clicked ${count} times`;
    
  // },[count]);
  // React.useEffect(() => {
  //   // debugger;
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // },[subname]);
  debugger;
  return (
    <React.Fragment>
      <div style={{'backgroundColor':'red','height':100}} onClick={onClick}>click me </div>
      {arr.map((item)=>{
        return <p key={item}>我是{item}</p>
      })}
    </React.Fragment>
  );
}

export default Hello