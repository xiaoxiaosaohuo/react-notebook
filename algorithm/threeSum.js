// [1,0,-1,3,4,-3,9]
// a+b+c=0
const threeNums = (nums)=>{
    let data = nums.sort((a,b)=>a-b);
    let res = [];
    for(let i=0;i<data.length-2;i++){
      if(i===0||(i>0&&data[i]!==data[i-1])){
        let low = i+1;
        let high = data.length-1;
        let sum = 0-data[i];
        while(low<high){
          if(data[low]+data[high]==sum){
            res.push([data[i],data[low],data[high]]);
            while(low<high&&data[low]==data[low+1])low++;
            while(low<high&&data[high]==data[high-1])high--;
            low++;
            high--;
          }else if(data[low]+data[high]<sum){
            low++;  
          }else{
            high--;
          }
        //  
          
        }
      }
    }
    return res;
  }
  let result =threeNums([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]);
  console.log(result)