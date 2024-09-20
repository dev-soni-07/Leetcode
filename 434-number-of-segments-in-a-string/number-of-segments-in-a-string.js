/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sArr = s.trim().split(" ").filter((el) => el !== "");
    return sArr.length;
};