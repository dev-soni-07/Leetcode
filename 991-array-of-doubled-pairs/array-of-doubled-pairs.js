/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
    const count = new Map();

    for (const x of arr) {
        count.set(x, (count.get(x) || 0) + 1);
    }

    arr.sort((a, b) => Math.abs(a) - Math.abs(b));

    for (const x of arr) {
        if (count.get(x) === 0) continue;

        const doubled = 2 * x;

        if ((count.get(doubled) || 0) === 0) {
            return false;
        }

        count.set(x, count.get(x) - 1);
        count.set(doubled, count.get(doubled) - 1);
    }

    return true;
};