/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let myObj = {};

    for (let i = 0; i < s.length; i++) {
        if (myObj[s[i]]) {
            myObj[s[i]] += 1;
        } else {
            myObj[s[i]] = 1;
        }
    }

    return Object.values(myObj).every(val => val === Object.values(myObj)[0]);
};