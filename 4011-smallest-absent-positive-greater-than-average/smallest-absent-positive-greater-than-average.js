/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    const set = new Set(nums);
    const sum = nums.reduce((a, b) => a + b, 0);
    const avg = sum / nums.length;

    let x = Math.max(1, Math.floor(avg) + 1);
    while (set.has(x)) {
        x++;
    }
    
    return x;
};
