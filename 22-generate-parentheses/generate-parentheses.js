/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    function backtrack(path, open, close) {
        if (path.length === 2 * n) {
            res.push(path);
            return;
        }
        
        if (open < n) backtrack(path + '(', open + 1, close);
        if (close < open) backtrack(path + ')', open, close + 1);
    }
    
    backtrack('', 0, 0);
    return res;
};
