/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let AllAAppearBeforeAllB = false, bStarted = false;

    for (let str of s) {
        if (str === 'b') {
            bStarted = true;
        }
        if (bStarted && str === 'a') {
            AllAAppearBeforeAllB = false;
            break;
        }
        AllAAppearBeforeAllB = true;
    }

    return AllAAppearBeforeAllB;
};