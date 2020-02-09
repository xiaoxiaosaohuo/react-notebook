/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-23 16:59:22
 * @LastEditTime: 2019-07-23 16:59:22
 * @LastEditors: your name
 */
function ChildInputComponent(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => inputRef.current);
    return <input type="text" name="child input" ref={inputRef} />;
}


const ChildInput = forwardRef(ChildInputComponent);


function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}