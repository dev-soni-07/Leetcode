/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
   let result = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++){
            if((nums[i] + nums[j]) < target){
                result += 1;
            }
        }
    }


    return result;
};