function Parent(name) {
    this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1]; // (该属性，强调私有)
}
Parent.prototype.say = function () { // --- 将需要复用、共享的方法定义在父类原型上 
    console.log('hello')
}
function Child(name, like) {
    Parent.call(this, name, like) // 核心   第二次
    this.like = like;
}
Child.prototype = Parent.prototype;  // 核心   第一次
Child.prototype.constructor = Child;
let boy1 = new Child('小红', 'apple')
let boy2 = new Child('小明', 'orange')
let p1 = new Parent('小爸爸')