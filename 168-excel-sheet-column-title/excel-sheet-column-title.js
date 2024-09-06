/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let columnTitle = '';

    while (columnNumber > 0) {
        columnNumber--;
        let remainder = columnNumber % 26;
        columnTitle = String.fromCharCode(remainder + 65) + columnTitle;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return columnTitle;
};