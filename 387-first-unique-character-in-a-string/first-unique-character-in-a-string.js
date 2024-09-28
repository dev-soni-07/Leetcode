/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let myObj = {};

    for (let i = 0; i < s.length; i++) {
        if (myObj[s[i]]) {
            myObj[s[i]]++;
        } else {
            myObj[s[i]] = 1;
        }
    }

    let objIndex = Object.values(myObj).findIndex((val) => val === 1);
    let char = Object.keys(myObj)[objIndex];
    let charIndex = s.indexOf(char);

    return charIndex;
};