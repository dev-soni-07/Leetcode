/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [];

    for (const ch of s) {
        if (ch === '(') {
            stack.push(ch);
        } else {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
                stack.push(1);
            } else {
                let score = 0;

                while (stack[stack.length - 1] !== '(') {
                    score += stack.pop();
                }

                stack.pop();
                stack.push(2 * score);
            }
        }
    }

    return stack.reduce((sum, val) => sum + val, 0);
};