/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let leftSubArray = [], rightSubArray = [];

    for (let num of nums) {
        if (num % 2 === 0) {
            leftSubArray.push(num);
        } else {
            rightSubArray.push(num);
        }
    }

    return leftSubArray.concat(rightSubArray);
};