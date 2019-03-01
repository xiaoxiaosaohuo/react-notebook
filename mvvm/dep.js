/**
 * 存储依赖该变量的watcher
 */
function Dep() {
    this.dep = []
  }
  // Dep.target在运行时会被赋值为Watcher
  Dep.target = null
  
  Dep.prototype = {
    depend(watcher) {
      this.dep.push(watcher)
    },
    notify() {
      this.dep.forEach(item => {
        item.update()
      })
    }
  }