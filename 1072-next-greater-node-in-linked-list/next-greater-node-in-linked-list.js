/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const nums = [];

    let current = head;

    while (current !== null) {
        nums.push(current.val);
        current = current.next;
    }

    const answer = new Array(nums.length).fill(0);
    const stack = [];

    for (let i = 0; i < nums.length; i++) {

        while (
            stack.length > 0 &&
            nums[i] > nums[stack[stack.length - 1]]
        ) {
            const index = stack.pop();
            answer[index] = nums[i];
        }

        stack.push(i);
    }

    return answer;
};