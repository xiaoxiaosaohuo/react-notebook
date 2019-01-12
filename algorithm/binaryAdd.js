
// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 输入: (a = "1010"), (b = "1011");
// 输出: "10101";


const addBinary = (a,b)=>{
    let len = Math.max(a.length,b.length);
    let str1 = a.padStart(len,0);
    let str2 = b.padStart(len,0);
    let flag = 0;
    let res = ''
    for(let i= len-1;i>=0;i--){
        let temp = parseInt(str1[i]) + flag +parseInt(str2[i]);
        res = temp%2+res;
        flag = parseInt(temp/2);
    }
    res = (flag===1?'1':'')+res;
    return res;
}

let res = addBinary('11','1');
console.log(res)

