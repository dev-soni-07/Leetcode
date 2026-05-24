/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    let map = {};

    for (let i = 0; i < indices.length; i++) {
        let idx = indices[i];
        let src = sources[i];

        if (s.substring(idx, idx + src.length) === src) {
            map[idx] = [src, targets[i]];
        }
    }

    let result = "";
    let i = 0;

    while (i < s.length) {
        if (map[i]) {
            let [src, target] = map[i];
            result += target;
            i += src.length;
        } else {
            result += s[i];
            i++;
        }
    }

    return result;
};