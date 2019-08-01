const bracket = (str)=>{
    const leftReg = /\{|\(|\[/;
        // 右括号正则
    const rightReg = /\}|\)|\]/;
    let stack = [];
    for(let i = 0; i<str.length;i++){
        let  char = str[i];
        debugger
        if(leftReg.test(char)) {
            stack.push(str[i])
        }else if(rightReg.test(char)){
            if(stack.length === 0){
                return false
            }
            let top = stack.slice(-1)[0];
            if((top==='{'&&char==='}')||(top==='('&&char===')')||top==='['&&char===']'){
                stack.pop()
            }
        }
    }
    return stack
}
let str = '(1[23)]'
let res = bracket(str);
console.log(res)