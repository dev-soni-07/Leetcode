# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def getDecimalValue(self, head):
        """
        :type head: ListNode
        :rtype: int
        """
        temp = str(head.val)
        while head.next is not None:
            head = head.next
            temp += str(head.val)

        return int(temp,2)