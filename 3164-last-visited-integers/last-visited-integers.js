/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function(nums) {
    let seen = [];
    let ans = [];
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== -1) {
            seen.unshift(nums[i]);
            k = 0;
        } else {
            k += 1;
            if (k <= seen.length) {
                ans.push(seen[k - 1]);
            } else {
                ans.push(-1);
            }
        }
    }
    return ans;
};