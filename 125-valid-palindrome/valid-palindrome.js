/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            filteredString += char;
        }
    }

    let reversedString = "";
    for (let i = filteredString.length - 1; i >= 0; i--) {
        reversedString += filteredString[i];
    }
    return filteredString === reversedString;
};