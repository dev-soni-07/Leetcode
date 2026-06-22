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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    const pos = new Map();

    for (let i = 0; i < postorder.length; i++) {
        pos.set(postorder[i], i);
    }

    function build(preL, preR, postL, postR) {
        if (preL > preR) return null;

        const root = new TreeNode(preorder[preL]);

        if (preL === preR) return root;

        const leftRootVal = preorder[preL + 1];
        const idx = pos.get(leftRootVal);

        const leftSize = idx - postL + 1;

        root.left = build(
            preL + 1,
            preL + leftSize,
            postL,
            idx
        );

        root.right = build(
            preL + leftSize + 1,
            preR,
            idx + 1,
            postR - 1
        );

        return root;
    }

    return build(
        0,
        preorder.length - 1,
        0,
        postorder.length - 1
    );
};