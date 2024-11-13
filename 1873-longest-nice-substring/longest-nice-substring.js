/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let niceSubstring = '';

    function isNice(sub) {
        let set = new Set(sub);
        for (let char of set) {
            if (!set.has(char.toLowerCase()) || !set.has(char.toUpperCase())) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            if (isNice(sub) && sub.length > niceSubstring.length) {
                niceSubstring = sub;
            }
        }
    }

    return niceSubstring;
};