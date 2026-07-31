/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    const ans = new Array(n);

    let even = 0;
    let odd = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] % 2 === 0) {
            ans[i] = odd;
            even++;
        } else {
            ans[i] = even;
            odd++;
        }
    }

    return ans;
};