/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (preorder.length === 0) {
        return null;
    }

    const root = new TreeNode(preorder[0]);

    let i = 1;

    while (i < preorder.length && preorder[i] < root.val) {
        i++;
    }

    root.left = bstFromPreorder(preorder.slice(1, i));

    root.right = bstFromPreorder(preorder.slice(i));

    return root;
};