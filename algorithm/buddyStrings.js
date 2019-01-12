// 给定两个由小写字母构成的字符串 A 和 B ，
// 只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 

// 输入： A = "ab", B = "ba"
// 输出： true

const buddyStrings = (a,b)=>{
    if(a.length!=b.length){
        return false;
    };
    if(a===b){
        if(new Set(a.split("")).size < a.length) return true;
        return false
    };
    if(a!==b){
      let i = -1;
      let j = -1;
      for(let k = 0;k<a.length;k++){
          if(a.charAt(k)!=b.charAt(k)){
              if(i===-1){
                  i=k;
              }else if(j===-1){
                  j=k
              }else{
                  return false
              }
          }
      } 
      return j!=-1&&a.charAt(i)===b.charAt(j)&&a.charAt(j)===b.charAt(i)
    }
   
}

let res = buddyStrings('ab','ab');

console.log(res)