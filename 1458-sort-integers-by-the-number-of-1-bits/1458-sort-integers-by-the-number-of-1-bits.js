/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countBits = (num) => {
        let count = 0;

        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }

        return count;
    }

    arr.sort((a, b) => {
        let bitCountA = countBits(a);
        let bitCountB = countBits(b);

        if (bitCountA !== bitCountB) {
            return bitCountA - bitCountB;
        } else {
            return a - b;
        }
    })

    return arr;
};