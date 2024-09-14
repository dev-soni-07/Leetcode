/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        if (sMap.has(sChar)) {
            if (sMap.get(sChar) !== tChar) {
                return false;
            }
        } else {
            sMap.set(sChar, tChar);
        }

        if (tMap.has(tChar)) {
            if (tMap.get(tChar) !== sChar) {
                return false;
            }
        } else {
            tMap.set(tChar, sChar);
        }
    }

    return true;
};