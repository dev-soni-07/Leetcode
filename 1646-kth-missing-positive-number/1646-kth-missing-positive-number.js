/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingCount = 0;
    let current = 1;
    let index = 0;

    while (true) {
        if (index < arr.length && arr[index] === current) {
            index++;
        } else {
            missingCount++;
            if (missingCount === k) {
                return current;
            }
        }
        current++;
    }
};