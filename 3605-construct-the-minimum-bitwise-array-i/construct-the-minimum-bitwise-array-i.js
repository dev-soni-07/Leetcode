/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans = [];
    for (let num of nums) {
        let found = false;
        for (let x = 0; x < num; x++) {
            if ((x | (x + 1)) === num) {
                ans.push(x);
                found = true;
                break;
            }
        }
        if (!found) ans.push(-1);
    }
    return ans;
};
