/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    const swap = (str, a, b) => {
        let arr = str.split('');
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        return arr.join('');
    }

    if (s.length !== goal.length) return false;

    if (s === goal) {
        let charSet = new Set(s);
        return charSet.size < s.length;
    }

    let diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    if (diff.length === 2) {
        let [i, j] = diff;
        let swapped = swap(s, i, j);
        return swapped === goal;
    }

    return false;
};