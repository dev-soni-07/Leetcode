/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let evenIndices = [];
    let oddIndices = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenIndices.push(nums[i]);
        } else {
            oddIndices.push(nums[i]);
        }
    }
    
    evenIndices.sort((a, b) => a - b);
    
    oddIndices.sort((a, b) => b - a);
    
    let result = [];
    let evenIndex = 0, oddIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result.push(evenIndices[evenIndex++]);
        } else {
            result.push(oddIndices[oddIndex++]);
        }
    }
    
    return result;
};