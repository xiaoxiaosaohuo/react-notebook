/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-09 12:59:16
 * @LastEditTime: 2019-04-09 12:59:16
 * @LastEditors: your name
 */
const array01 = [1,2,3,4]

const  Hello =  () => {
  debugger;
  const [count, setCount] = React.useState(0);
  
  const [name, setName] = React.useState("test");
  const onClick = React.useCallback(()=>{
    // const arr = [1,4,2,3]
    setCount(count+1);
    // setName('hello world');
  },[])
  React.useEffect(() => {
    // debugger;
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