/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    
    function isPalindrome(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    
    function dfs(start, path) {
        if (start === s.length) {
            res.push([...path]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                path.push(s.slice(start, end + 1));
                dfs(end + 1, path);
                path.pop();
            }
        }
    }
    
    dfs(0, []);
    return res;
};