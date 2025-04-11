/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let minRecolors = k;
    let currentRecolors = 0;

    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') {
            currentRecolors++;
        }
    }

    minRecolors = currentRecolors;

    for (let i = k; i < blocks.length; i++) {
        if (blocks[i - k] === 'W') {
            currentRecolors--;
        }
        if (blocks[i] === 'W') {
            currentRecolors++;
        }

        minRecolors = Math.min(minRecolors, currentRecolors);
    }

    return minRecolors;
};