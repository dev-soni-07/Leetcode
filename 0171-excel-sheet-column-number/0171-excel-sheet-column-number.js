/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let columnNumber = 0;

    for (let i = 0; i < columnTitle.length; i++ ) {
        let charvalue = columnTitle.charCodeAt(i) - 64;
        columnNumber = columnNumber * 26 + charvalue;
    }

    return columnNumber;
};