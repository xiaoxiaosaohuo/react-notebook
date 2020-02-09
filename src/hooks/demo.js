/*
 * @Author: your name
 * @Date: 2019-11-02 13:23:06
 * @LastEditTime: 2019-11-04 09:53:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-notebook/src/hooks/demo.js
 */


// 首次渲染
function Counter() {
    useEffect(
      // 第一次渲染后 Effect 
      () => {
        console.log(`我是属于count=${0}的那次render的effect`);
      }
    );
  }
  
  // 点击按钮
  function Counter() {
    useEffect(
      // 第二次渲染
      () => {
        console.log(`我是属于count=${1}的那次render的effect`);
      }
    );
  }
  
  // 再次点击按钮，
  function Counter() {
    useEffect(
      // 第三次渲染
      () => {
        console.log(`我是属于count=${2}的那次render的effect`);
      }
    );
  }