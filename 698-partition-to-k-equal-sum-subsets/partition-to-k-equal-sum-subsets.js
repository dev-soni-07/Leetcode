/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let total = nums.reduce((a, b) => a + b, 0);
    
    if (total % k !== 0) return false;
    
    let target = total / k;
    nums.sort((a, b) => b - a); // descending
    
    let visited = new Array(nums.length).fill(false);
    
    function backtrack(start, k, currentSum) {
        // If only one subset left, it's valid
        if (k === 1) return true;
        
        // If current subset is filled, move to next
        if (currentSum === target) {
            return backtrack(0, k - 1, 0);
        }
        
        for (let i = start; i < nums.length; i++) {
            if (visited[i]) continue;
            
            if (currentSum + nums[i] > target) continue;
            
            visited[i] = true;
            
            if (backtrack(i + 1, k, currentSum + nums[i])) {
                return true;
            }
            
            visited[i] = false;
            
            // 🔥 pruning (very important)
            if (currentSum === 0) break;
        }
        
        return false;
    }
    
    return backtrack(0, k, 0);
};