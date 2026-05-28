/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k !== 0) return false;

    let count = new Map();

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    nums.sort((a, b) => a - b);

    for (let num of nums) {
        if (count.get(num) === 0) continue;

        for (let i = 0; i < k; i++) {
            let current = num + i;

            if (!count.has(current) || count.get(current) === 0) {
                return false;
            }

            count.set(current, count.get(current) - 1);
        }
    }

    return true;
};