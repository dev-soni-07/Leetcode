/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const lastIndex = new Array(26).fill(0);
    const used = new Array(26).fill(false);
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        lastIndex[s.charCodeAt(i) - 97] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;

        if (used[c]) continue;

        while (
            stack.length > 0 &&
            stack[stack.length - 1] > c &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            used[stack.pop()] = false;
        }

        stack.push(c);
        used[c] = true;
    }

    return stack.map(x => String.fromCharCode(x + 97)).join("");
};