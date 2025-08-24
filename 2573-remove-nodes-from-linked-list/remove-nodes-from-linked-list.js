/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    const dfs = (node) => {
        if (!node) return null;

        node.next = dfs(node.next);
        if (node.next && node.val < node.next.val) {
            return node.next;
        }
        return node;
    };

    return dfs(head);
};
