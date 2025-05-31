/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let max = 0;
    let prev = -1;
    for (let i = 0; i < forts.length; i++) {
        if (forts[i] !== 0) {
            if (prev !== -1 && forts[i] !== forts[prev]) {
                max = Math.max(max, Math.abs(i - prev) - 1);
            }
            prev = i;
        }
    }
    return max;
};