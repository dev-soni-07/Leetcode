/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    const result = [];
    const n = arr.length;

    for (let currSize = n; currSize > 1; currSize--) {
        let maxIndex = 0;

        for (let i = 1; i < currSize; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }

        if (maxIndex === currSize - 1) {
            continue;
        }

        if (maxIndex !== 0) {
            reverse(arr, maxIndex + 1);
            result.push(maxIndex + 1);
        }

        reverse(arr, currSize);
        result.push(currSize);
    }

    return result;
};

function reverse(arr, k) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}