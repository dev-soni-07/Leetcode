/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        while (nums[i + 1] - nums[i] === 1) {
            i++;
        }
        if (start !== nums[i]) {
            output.push(start + '->' + nums[i]);
        } else {
            output.push(start + '');
        }
    }

    return output;
};