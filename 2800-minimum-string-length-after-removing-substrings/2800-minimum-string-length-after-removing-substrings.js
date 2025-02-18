/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];

    for (let char of s) {
        stack.push(char);
        while (stack.length >= 2) {
            let lastTwo = stack.slice(-2).join('');
            if (lastTwo === 'AB' || lastTwo === 'CD') {
                stack.pop();
                stack.pop();
            } else {
                break;
            }
        }
    }

    return stack.length;
};