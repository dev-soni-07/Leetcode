/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let myObj = {};

    for (let str of strs) {
        if (!isNaN(str)) {
            myObj[str] = parseInt(str);
        } else {
            myObj[str] = str.length;
        }
    }

    return Math.max(...Object.values(myObj));
};