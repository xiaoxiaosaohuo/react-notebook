/*
 * @Author: your name
 * @Date: 2019-11-27 13:40:17
 * @LastEditTime: 2019-11-27 13:40:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-notebook/mvvm/arrayVue/index.js
 */
//数据源
let vm = {
    list: [1, 2, 3, 4]
}

//用于管理watcher的Dep对象
let Dep = function () {
    this.list = [];
    this.add = function (watcher) {
        this.list.push(watcher)
    };
    this.notify = function (newValue) {
        this.list.forEach(function (fn) {
            fn(newValue)
        })
    }
};

// 模拟compile,通过对Html的解析生成一系列订阅者（watcher）
function renderList() {
    let listContainer = document.querySelector('#list');
    let contentList = '';
    vm.list.forEach(function (item) {
        contentList = contentList + `<div><h3>${item}</h3></div>`
    })
    listContainer.innerHTML = contentList;
}

//将解析出来的watcher存入Dep中待用
let dep = new Dep();
dep.add(renderList)

//核心方法
function initMVVM(vm) {
    Object.keys(vm).forEach(function (key) {
        let value = vm[key];
        if (Array.isArray(value)) {
            observeArray(vm, key)
        }
    })
}

function observeArray(vm, key) {
    let arrayMethod = bindWatcherToArray();
    vm[key].__proto__ = arrayMethod;
}

function bindWatcherToArray() {
    let arrayMethod = Object.create(Array.prototype);
    ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
        Object.defineProperty(arrayMethod, method, {
            enumerable: true,
            configurable: true,
            value: function () {
                let args = [...arguments]
                Array.prototype[method].apply(this, args);
                console.log(`operation: ${method}`)
                dep.notify();
            }
        })
    });
    return arrayMethod
}

//页面引用的方法
function btnAdd() {
    vm.list.push(Math.random())
}
function btnDel() {
    vm.list.pop()
}

//初始化数据源
initMVVM(vm)

//初始化页面
dep.notify();