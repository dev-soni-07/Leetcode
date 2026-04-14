/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    
    let dp = new Array(m + 1).fill(0);
    let maxLen = 0;
    
    for (let i = 1; i <= n; i++) {
        for (let j = m; j >= 1; j--) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                maxLen = Math.max(maxLen, dp[j]);
            } else {
                dp[j] = 0;
            }
        }
    }
    
    return maxLen;
};