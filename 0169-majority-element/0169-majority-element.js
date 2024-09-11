/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorityElement = 0, myObj = {};

    for (let i = 0; i < nums.length; i++) {
        if (myObj[nums[i]]){
            myObj[nums[i]]++;
        } else {
            myObj[nums[i]] = 1;
        }
    }

    majorityElement = Object.keys(myObj).reduce((a, b) => myObj[a] > myObj[b] ? a : b);

    return majorityElement;
};