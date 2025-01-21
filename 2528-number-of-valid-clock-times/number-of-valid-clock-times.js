/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let count = 1;
    if (time[0] === '?' && time[1] === '?') {
        count *= 24;
    } else if (time[0] === '?') {
        count *= time[1] < '4' ? 3 : 2;
    } else if (time[1] === '?') {
        count *= time[0] === '2' ? 4 : 10;
    }
    if (time[3] === '?') count *= 6;
    if (time[4] === '?') count *= 10;
    return count;
};