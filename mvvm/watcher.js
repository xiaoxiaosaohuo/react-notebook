/**
 * 观察者对象
 * @param {*} obj
 * @param {*} exp
 * @param {*} callback
 */
function Watcher(obj, exp, callback) {
    this.obj = obj
    this.callback = callback || function() {}
    // 生成getter函数
    this.getter = this.parseGetter(exp)
    // 触发求值，收集依赖
    this.value = this.get()
  }
  
  Watcher.prototype = {
    get() {
      //  把Dep关联进来
      Dep.target = this
      // 由于会求值，所以会调用被劫持的getter函数
      // 所以此时进入到get函数
      // 由于设置了Dep.target,add.sub方法，从而创建了一个依赖链。
      const value = this.getter.call(this.obj, this.obj)
      Dep.target = null
      return value
    },
    update() {
      const newVal = this.getter.call(this.obj, this.obj)
      this.callback(newVal, this.value)
      this.value = newVal
    },
    parseGetter(exp) {
      return obj => get(obj, exp)
    }
  }