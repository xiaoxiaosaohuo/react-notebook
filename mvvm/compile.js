function Compile(vm) {
    this.$vm = vm
    this.$el = document.querySelector(vm.$el)
    this.compileElement(this.$el)
  }
  
  Compile.prototype = {
    compileElement(el) {
      Array.prototype.slice.call(el.childNodes).forEach(node => {
        const text = node.textContent
        const reg = /\{\{( *[\w.]+ *)\}\}/
  
        if (this.isElementNode(node)) {
          this.compile(node)
        } else if (this.isTextNode(node)) {
          const result = reg.exec(text)
          if (result) this.compileText(node, result[1].trim())
        }
        if (node.childNodes && node.childNodes.length) {
          this.compileElement(node)
        }
      })
    },
    compile(node) {
      const nodeAttrs = node.attributes
      Array.prototype.slice.call(nodeAttrs).forEach(attr => {
        const attrName = attr.name
        if (attrName.indexOf('v-') === 0) {
          const exp = attr.value
          const dir = attrName.substring(2)
          // 事件指令
          if (dir.indexOf('on') === 0) {
            compileUtil.event(node, this.$vm, exp, dir)
          } else {
            // 普通指令
            compileUtil[dir] && compileUtil[dir](node, this.$vm, exp)
          }
          node.removeAttribute(attrName)
        }
      })
    },
    compileText(node, exp) {
      compileUtil.text(node, this.$vm, exp)
    },
    isElementNode(node) {
      return node.nodeType == 1
    },
    isTextNode(node) {
      return node.nodeType == 3
    }
  }
  
  // 指令处理集合
  const compileUtil = {
    text(node, vm, exp) {
      function updateText() {
        const val = get(vm, exp)
        node.textContent = val == undefined ? '' : typeof val === 'string' ? val : JSON.stringify(val)
      }
      updateText()
      vm.$watch(exp, updateText)
    },
  
    model(node, vm, exp) {
      function updateValue() {
        const val = get(vm, exp)
        node.value = val == undefined ? '' : val
      }
      updateValue()
      node.addEventListener('input', e => set(vm, exp, e.target.value))
      vm.$watch(exp, updateValue)
    },
    // 事件处理
    event(node, vm, exp, dir) {
      const event = dir.split(':')[1]
      const fn = vm[exp]
      if (event && fn) {
        node.addEventListener(event, fn.bind(vm))
      }
    }
  }