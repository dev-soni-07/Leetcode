/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingNum = 0, n = nums.length, temp = [];

    for (let i = 0; i <= n; i++){temp.push(i)}

    for (let num of temp){
        if(!nums.includes(num)){
            missingNum = num;
            break;
        }
    }

    return missingNum;
};