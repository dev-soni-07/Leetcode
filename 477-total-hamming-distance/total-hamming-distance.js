/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let total = 0;
    const n = nums.length;

    for (let bit = 0; bit < 32; bit++) {
        let ones = 0;

        for (let i = 0; i < n; i++) {
            if ((nums[i] >> bit) & 1) {
                ones++;
            }
        }

        let zeros = n - ones;
        total += ones * zeros;
    }

    return total;
};