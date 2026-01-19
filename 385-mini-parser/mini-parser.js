/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    if (s[0] !== '[') {
        let ni = new NestedInteger();
        ni.setInteger(parseInt(s));
        return ni;
    }

    let stack = [];
    let num = 0;
    let sign = 1;
    let hasNum = false;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === '[') {
            stack.push(new NestedInteger());
        } else if (ch === '-') {
            sign = -1;
        } else if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch.charCodeAt(0) - 48);
            hasNum = true;
        } else if (ch === ',' || ch === ']') {
            if (hasNum) {
                let ni = new NestedInteger();
                ni.setInteger(num * sign);
                stack[stack.length - 1].add(ni);
            }

            num = 0;
            sign = 1;
            hasNum = false;

            if (ch === ']' && stack.length > 1) {
                let completed = stack.pop();
                stack[stack.length - 1].add(completed);
            }
        }
    }

    return stack[0];
};