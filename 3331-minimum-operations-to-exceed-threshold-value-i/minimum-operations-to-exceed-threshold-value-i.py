class Solution(object):
    def minOperations(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        nums.sort()
        operation = 0
        for i in range(len(nums)):
            if nums[i] < k:
                operation += 1

        return operation