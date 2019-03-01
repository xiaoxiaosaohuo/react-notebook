function get(obj, key) {
    if (typeof key !== 'string') return
    const k = key.split('.')
    let val = obj[k[0]]
    if (typeof val !== 'object') return val
    for (let i = 1, length = k.length; i < length; i++) {
      val = val[k[i]]
      if (val === undefined) break
    }
    return val
  }
  
  function set(obj, key, value) {
    let val = obj
    key = key.split('.')
    for (let i = 0, length = key.length; i < length; i++) {
      const k = key[i]
      if (i === key.length - 1) {
        val[k] = value
      } else {
        val = val[k] || {}
      }
    }
  }