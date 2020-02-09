/*
 * @Author: your name
 * @Date: 2019-11-27 13:41:08
 * @LastEditTime: 2019-11-27 13:41:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-notebook/mvvm/arrayVue/demo.js
 */
let data = {
    list: []
}

Object.keys(data).forEach(function (key) {
    let value = data[key];
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            return value;
        },
        set(newValue) {
            console.log(`Setting`);
            value = newValue;
            return true;
        }
    })
})

// data.list.push(1);                 //--->  A
data.list = [1, 2, 3];                //--->  B
console.log(data.list);