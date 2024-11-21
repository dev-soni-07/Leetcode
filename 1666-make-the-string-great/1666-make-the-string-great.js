/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};