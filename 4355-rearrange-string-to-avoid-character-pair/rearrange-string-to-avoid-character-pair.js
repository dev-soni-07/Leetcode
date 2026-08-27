/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
    let before = [];
    let middle = [];
    let after = [];

    for (const ch of s) {
        if (ch === y) {
            before.push(ch);
        } else if (ch === x) {
            after.push(ch);
        } else {
            middle.push(ch);
        }
    }

    return before.join('') + middle.join('') + after.join('');
};