/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    const n = Math.max(...nums);
    if (nums.length !== n + 1) return false;

    const base = [];
    for (let i = 1; i < n; i++) base.push(i);
    base.push(n, n);

    nums.sort((a, b) => a - b);
    base.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== base[i]) return false;
    }
    return true;
}