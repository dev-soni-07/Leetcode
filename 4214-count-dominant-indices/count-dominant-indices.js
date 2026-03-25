/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    let n = nums.length;
    let total = nums.reduce((a, b) => a + b, 0);
    
    let countDominant = 0;
    
    for (let i = 0; i < n - 1; i++) {
        total -= nums[i];
        let count = n - i - 1;
        
        if (nums[i] * count > total) {
            countDominant++;
        }
    }
    
    return countDominant;
};