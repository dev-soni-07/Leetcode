/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    let prev = new Set();
    let ans = new Set();

    for (const num of arr) {
        let curr = new Set([num]);

        for (const val of prev) {
            curr.add(val | num);
        }

        for (const val of curr) {
            ans.add(val);
        }

        prev = curr;
    }

    return ans.size;
};