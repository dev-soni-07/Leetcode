/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b);
    let averages = [];
    let n = nums.length;

    for (let i = 0; i < n / 2; i++) {
        let minElement = nums[i];
        let maxElement = nums[n - i - 1];
        averages.push((minElement + maxElement) / 2);
    }

    return Math.min(...averages);
};