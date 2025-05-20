/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    const prefix = [0];
    for (let num of nums) {
        prefix.push(prefix[prefix.length - 1] + num);
    }
    const res = [];
    for (let q of queries) {
        let left = 0, right = prefix.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right + 1) / 2);
            if (prefix[mid] <= q) left = mid;
            else right = mid - 1;
        }
        res.push(left);
    }
    return res;
};