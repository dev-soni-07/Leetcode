/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const map = new Map();
    for (const piece of pieces) {
        map.set(piece[0], piece);
    }

    let i = 0;
    while (i < arr.length) {
        if (!map.has(arr[i])) {
            return false;
        }

        const piece = map.get(arr[i]);

        for (let j = 0; j < piece.length; j++) {
            if (arr[i] !== piece[j]) {
                return false;
            }
            i++;
        }
    }

    return true;
};