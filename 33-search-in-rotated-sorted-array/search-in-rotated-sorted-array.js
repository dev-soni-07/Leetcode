/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let result = -1;

nums.forEach((element, index) => {
    if (element === target) {
            result =  index;
        }
    })

    return result;
};