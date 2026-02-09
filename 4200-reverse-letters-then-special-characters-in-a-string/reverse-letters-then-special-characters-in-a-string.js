/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let letters = [];
    let specials = [];

    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            letters.push(ch);
        } else {
            specials.push(ch);
        }
    }

    letters.reverse();
    specials.reverse();

    let result = [];
    let li = 0;
    let si = 0;

    for (let ch of s) {
        if (ch >= 'a' && ch <= 'z') {
            result.push(letters[li++]);
        } else {
            result.push(specials[si++]);
        }
    }

    return result.join('');
};