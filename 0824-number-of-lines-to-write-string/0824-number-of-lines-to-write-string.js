/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1;
    let currentWidth = 0;

    for (let i = 0; i < s.length; i++) {
        let charWidth = widths[s.charCodeAt(i) - 97];
        if (currentWidth + charWidth > 100) {
            lines++;
            currentWidth = charWidth;
        } else {
            currentWidth += charWidth;
        }
    }

    return [lines, currentWidth];
};