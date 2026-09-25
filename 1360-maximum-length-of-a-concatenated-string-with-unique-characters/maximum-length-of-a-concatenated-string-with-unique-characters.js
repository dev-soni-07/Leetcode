/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let answer = 0;

    function backtrack(index, used) {
        answer = Math.max(answer, used.size);

        for (let i = index; i < arr.length; i++) {
            const str = arr[i];

            const chars = new Set(str);

            if (chars.size !== str.length) {
                continue;
            }

            let canUse = true;

            for (const ch of str) {
                if (used.has(ch)) {
                    canUse = false;
                    break;
                }
            }

            if (!canUse) {
                continue;
            }

            for (const ch of str) {
                used.add(ch);
            }

            backtrack(i + 1, used);

            for (const ch of str) {
                used.delete(ch);
            }
        }
    }

    backtrack(0, new Set());

    return answer;
};