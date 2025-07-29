/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let count = new Map();
    let res = [];
    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        if (count.get(num) === 2) res.push(num);
    }
    return res;
};
