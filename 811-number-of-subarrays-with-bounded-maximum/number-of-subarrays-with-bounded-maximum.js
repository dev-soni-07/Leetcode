/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    
    function count(bound) {
        let ans = 0;
        let curr = 0;
        
        for (let num of nums) {
            if (num <= bound) {
                curr += 1;
            } else {
                curr = 0;
            }
            ans += curr;
        }
        
        return ans;
    }
    
    return count(right) - count(left - 1);
};