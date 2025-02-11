/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let result = [];
    let currentNumber = 0;

    for (let i = 0; i < nums.length; i++) {
        currentNumber = (currentNumber * 2 + nums[i]) % 5;
        result.push(currentNumber === 0);
    }

    return result;  
};