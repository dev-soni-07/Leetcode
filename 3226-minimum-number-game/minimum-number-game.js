/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result = [];
    nums.sort((a, b) => b - a);

    let l = nums.length
    for (let i = 0; i < l / 2; i++) {
        let a = nums.pop();
        let b = nums.pop();
        result.push(b);
        result.push(a);
    }

    return result;
};