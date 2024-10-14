/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicateNumber, missingNumber;
    let n = nums.length;
    let numSet = new Set();
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (numSet.has(nums[i])) {
            duplicateNumber = nums[i];
        } else {
            numSet.add(nums[i]);
        }
        sum += nums[i];
    }

    let expectedSum = (n * (n + 1)) / 2;
    missingNumber = expectedSum - (sum - duplicateNumber);
    return [duplicateNumber, missingNumber];
};