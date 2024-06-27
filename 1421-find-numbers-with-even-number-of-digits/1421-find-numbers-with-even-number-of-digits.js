/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const result = nums.filter((element, index) => {
        if (String(element).length % 2 === 0) {
            return element;
        }
    })

    return result.length;
};