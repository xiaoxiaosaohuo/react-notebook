function Mvvm(options) {
    this.$options = options || {}
    this.$el = options.el
    this._data = this.$options.data()
  
    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(this, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          return this._data[key]
        },
        set: val => {
          this._data[key] = val
        }
      })
    })
  
    // 挂载计算属性到this
    const computed = this.$options.computed || {}
    Object.keys(computed).forEach(key => {
      Object.defineProperty(this, key, {
        get: () => {
          return computed[key].call(this)
        }
      })
    })
    // 挂载方法
    const methods = this.$options.methods || {}
    Object.keys(methods).forEach(key => {
      this[key] = methods[key]
    })
  
    // watch选项设置
    const watch = this.$options.watch || {}
    Object.keys(watch).forEach(key => this.$watch(key, watch[key]))
  
    observe(this._data)
  
    new Compile(this)
    return this
  }
  
  Mvvm.prototype.$watch = function(key, cb) {
    new Watcher(this, key, cb)
  }