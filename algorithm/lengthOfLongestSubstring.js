var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let maxLen = 0;
    let smap = new Map();
    for (let i = 0, j = 0; j < n; j++) {
        if (smap.has(s.charAt(j))) {
            i = Math.max(smap.get(s.charAt(j)), i);
        }
        maxLen = Math.max(maxLen, j - i + 1);
        smap.set(s.charAt(j), j+1)
    }
    return maxLen
};

let str = "abcabcbb";
lengthOfLongestSubstring(str)