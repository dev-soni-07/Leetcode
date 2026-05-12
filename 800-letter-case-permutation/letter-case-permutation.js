/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const result = [];

    function backtrack(index, current) {
        if (index === s.length) {
            result.push(current);
            return;
        }

        const char = s[index];

        if (/[a-zA-Z]/.test(char)) {
            backtrack(index + 1, current + char.toLowerCase());
            backtrack(index + 1, current + char.toUpperCase());
        } else {
            backtrack(index + 1, current + char);
        }
    }

    backtrack(0, "");

    return result;
};