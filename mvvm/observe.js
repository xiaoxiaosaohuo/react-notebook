/**
 * 循环对象的属性值
 * 如果是对象就再循环的去做数据劫持
 * @param {*} value
 */
function observe(value) {
    if (!value || typeof value !== 'object' || value.__dep__ instanceof Dep) {
      return
    }
    Object.keys(value).forEach(key => defineReactive(value, key, value[key]))
  }
  
  /**
   * 个数据定义一个属性值
   * @param {*} obj
   * @param {*} key
   * @param {*} val
   */
  function def(obj, key, val) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: false, // 不能被枚举
      writable: true,
      configurable: true
    })
  }
  
  /**
   * 劫持对象属性
   * @param {*} obj
   * @param {*} key
   * @param {*} val
   */
  function defineReactive(obj, key, val) {
    const dep = new Dep()
    def(obj, '__dep__', dep)
    observe(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.depend(Dep.target)
        }
        return val
      },
      set(nVal) {
        val = nVal
        observe(val)
        dep.notify()
      }
    })
  }