var twoSum = function (nums, target) {
    var data = {};
    for (i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (data[target - num] !== undefined) {
             return [data[target - num], i];
        } else {
            data[num] = i
        }
    }
    return [];
};

let nums = [1,2,5,4,6,0,4,9,4];
let target = 10;

let res = twoSum(nums,8);
console.log(res)