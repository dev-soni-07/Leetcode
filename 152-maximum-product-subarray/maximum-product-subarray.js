/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];
        
        if (n < 0) [currMax, currMin] = [currMin, currMax];
        
        currMax = Math.max(n, currMax * n);
        currMin = Math.min(n, currMin * n);
        
        maxProd = Math.max(maxProd, currMax);
    }
    
    return maxProd;
};
