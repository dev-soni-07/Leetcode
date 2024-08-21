/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let twiceCharacter = "", countObj = {};

    for (let i = 0; i < s.length; i++) {
        if (countObj[s[i]]) {
            twiceCharacter = s[i];
            break;
        } else {
            countObj[s[i]] = 1;
        }
    }

    return twiceCharacter;
};