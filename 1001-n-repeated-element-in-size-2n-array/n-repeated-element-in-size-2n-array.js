/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = nums.length/2, obj = {};

    for (let num of nums){
        if (obj[num]){
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    }

    return Object.keys(obj).find(key => obj[key] === n);
};