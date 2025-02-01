/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const threshold = Math.floor(arr.length / 4);
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
            if (count > threshold) {
                return arr[i];
            }
        } else {
            count = 1;
        }
    }

    return arr[0];
};