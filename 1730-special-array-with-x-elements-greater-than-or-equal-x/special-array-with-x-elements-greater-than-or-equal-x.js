/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let x = 0; x <= nums.length; x++) {
        let count = nums.filter(num => num >= x).length;
        
        if (count === x) {
            return x;
        }
    }

    return -1;
};