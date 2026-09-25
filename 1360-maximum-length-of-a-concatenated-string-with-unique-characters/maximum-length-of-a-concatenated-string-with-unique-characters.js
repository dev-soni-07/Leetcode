/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const masks = [];

    for (const str of arr) {
        let mask = 0;
        let valid = true;

        for (const ch of str) {
            const bit = 1 << (ch.charCodeAt(0) - 97);

            if (mask & bit) {
                valid = false;
                break;
            }

            mask |= bit;
        }

        if (valid) {
            masks.push([mask, str.length]);
        }
    }

    let answer = 0;

    function backtrack(index, usedMask, length) {
        answer = Math.max(answer, length);

        for (let i = index; i < masks.length; i++) {
            const [mask, strLength] = masks[i];

            if (usedMask & mask) {
                continue;
            }

            backtrack(
                i + 1,
                usedMask | mask,
                length + strLength
            );
        }
    }

    backtrack(0, 0, 0);

    return answer;
};