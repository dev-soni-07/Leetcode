/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const backtrack = (path, remaining) => {
        if (remaining.length === 0) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            path.push(remaining[i]);
            const next = remaining.slice(0, i).concat(remaining.slice(i + 1));
            backtrack(path, next);
            path.pop();
        }
    };

    backtrack([], nums);
    return result;
};
