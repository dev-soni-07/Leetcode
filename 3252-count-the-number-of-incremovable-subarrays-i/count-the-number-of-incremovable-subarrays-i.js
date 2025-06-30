/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    const n = nums.length;
    let count = 0;

    function isStrictlyIncreasing(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] <= arr[i - 1]) return false;
        }
        return true;
    }

    for (let l = 0; l < n; l++) {
        for (let r = l; r < n; r++) {
            const newArr = nums.slice(0, l).concat(nums.slice(r + 1));
            if (isStrictlyIncreasing(newArr)) {
                count++;
            }
        }
    }
    return count;
};