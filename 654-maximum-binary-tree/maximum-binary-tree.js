/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let stack = [];

    for (let num of nums) {
        let curr = new TreeNode(num);

        while (stack.length && stack[stack.length - 1].val < num) {
            curr.left = stack.pop();
        }

        if (stack.length) {
            stack[stack.length - 1].right = curr;
        }

        stack.push(curr);
    }

    return stack[0];
};