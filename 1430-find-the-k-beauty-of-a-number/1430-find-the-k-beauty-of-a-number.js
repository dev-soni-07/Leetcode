/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let numStr = num.toString();
    let count = 0;

    for (let i = 0; i <= numStr.length - k; i++) {
        let substring = numStr.substring(i, i + k);
        let subNum = parseInt(substring);

        if (subNum !== 0 && num % subNum === 0) {
            count++;
        }
    }

    return count;
};