/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let greatestCommonDivisor = 1;
    nums.sort((a, b) => a - b);
    let smallestNum = nums[0];
    let largestNum = nums[nums.length - 1];

    for (let i = 1; i <= smallestNum; i++) {
        if (smallestNum % i === 0 && largestNum % i === 0) {
            greatestCommonDivisor = i;
        }
    }

    return greatestCommonDivisor;
};