/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    let res = [];

    while (a > 0 || b > 0) {
        let n = res.length;

        let canAddA = !(n >= 2 && res[n - 1] === 'a' && res[n - 2] === 'a');
        let canAddB = !(n >= 2 && res[n - 1] === 'b' && res[n - 2] === 'b');

        if ((a >= b && canAddA) || !canAddB) {
            res.push('a');
            a--;
        } else {
            res.push('b');
            b--;
        }
    }

    return res.join('');
};