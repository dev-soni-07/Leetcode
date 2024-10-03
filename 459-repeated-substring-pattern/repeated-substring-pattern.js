/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++){
        let sub = s.slice(0, i);
        if ((sub.repeat(s.length / sub.length)) === s){
            return true;
        }
    }

    return false;
};