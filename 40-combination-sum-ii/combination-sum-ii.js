/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }
        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);
            backtrack(i + 1, path, sum + candidates[i]);
            path.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
};
