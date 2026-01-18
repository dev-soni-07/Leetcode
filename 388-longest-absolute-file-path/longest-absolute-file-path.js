/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let maxLen = 0;
    let pathLen = new Map();
    pathLen.set(0, 0);

    let lines = input.split('\n');

    for (let line of lines) {
        let depth = line.lastIndexOf('\t') + 1;
        let name = line.slice(depth);

        let currLen = pathLen.get(depth) + name.length;

        if (name.includes('.')) {
            maxLen = Math.max(maxLen, currLen);
        } else {
            pathLen.set(depth + 1, currLen + 1);
        }
    }

    return maxLen;
};
