/**
 * @param {string} s
 * @return {number}
 */
let SMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
let romanToInt = function (s) {

    let i = 0;
    let output = 0;
    let max = 0;
    for (i = s.length - 1; i >= 0; i--) {
        var currVal = SMap[s[i]];
        output += currVal >= max ? currVal : -currVal;
        max = Math.max(max, currVal);
    }
    return output;

};

let a = romanToInt("IIII");
console.log(a);