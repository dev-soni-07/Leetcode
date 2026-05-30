/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let up = 0;
    let down = 0;
    let ans = 0;

    for (let i = 1; i < arr.length; i++) {
        if ((down > 0 && arr[i] > arr[i - 1]) ||
            arr[i] === arr[i - 1]) {
            up = 0;
            down = 0;
        }

        if (arr[i] > arr[i - 1]) {
            up++;
        } else if (arr[i] < arr[i - 1]) {
            down++;
        }

        if (up > 0 && down > 0) {
            ans = Math.max(ans, up + down + 1);
        }
    }

    return ans;
};