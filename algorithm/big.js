function add(num1, num2) {
    let len = Math.max(num1.length, num2.length)
    num1 = num1.padStart(len, 0)
    num2 = num2.padStart(len, 0)
    let flag = 0
    let result = ''
    let temp = 0
    for (let i = len - 1; i >= 0; i--) {
        temp = flag + parseInt(num1[i]) + parseInt(num2[i])
        result = (temp % 10) + result
        flag = parseInt(temp / 10)
    }
    result = (flag === 1 ? '1' : '') + result
    return result
}

let num1 = "19";
let num2 = "9999";
add(num1, num2);