var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];

    for (let len = 0; len < strs[0].length; len++)
        for (let i = 1; i < strs.length; i++)
            if (len >= strs[i].length || strs[i][len] != strs[0][len])
                return strs[0].substring(0, len);
    return strs[0];
};

var longestCommonPrefix1 = function(strs){
    if (strs.length == 0) return "";
    if (strs.length == 1) return strs[0];
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix)!==0){
            prefix = prefix.substring(0,prefix.length-1);
            if(!prefix) return'';
        }
    }
    return prefix;

}