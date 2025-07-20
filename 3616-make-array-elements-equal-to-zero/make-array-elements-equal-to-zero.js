/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    const n = nums.length;
    let count = 0;

    function isValid(start, dir) {
        let temp = nums.slice();
        let curr = start;
        let d = dir;

        while (curr >= 0 && curr < n) {
            if (temp[curr] === 0) {
                curr += d;
            } else {
                temp[curr]--;
                d = -d;
                curr += d;
            }
        }

        return temp.every(val => val === 0);
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (isValid(i, -1)) count++;
            if (isValid(i, 1)) count++;
        }
    }

    return count;
};
