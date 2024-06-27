/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let max = Math.max(... nums.filter((element) => {
        if(element > 0 && nums.includes(-element)){
            return element;
        }
    }));

    return max > 0 ? max : -1;
};