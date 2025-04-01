/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    for (let i = 0; i <= arr.length - m * k; i++) {
        let pattern = arr.slice(i, i + m);
        let count = 0;

        for (let j = i; j < i + m * k; j += m) {
            if (arr.slice(j, j + m).join() === pattern.join()) {
                count++;
            } else {
                break;
            }
        }

        if (count >= k) {
            return true;
        }
    }
    return false;
};