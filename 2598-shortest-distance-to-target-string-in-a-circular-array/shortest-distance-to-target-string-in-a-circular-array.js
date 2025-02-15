/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let n = words.length;
    let minDistance = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            let distance = Math.min(
                Math.abs(i - startIndex),
                n - Math.abs(i - startIndex)
            );
            minDistance = Math.min(minDistance, distance);
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};