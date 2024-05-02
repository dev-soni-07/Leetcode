class Solution(object):
    def findMaxK(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max = -1
        for i in range(len(nums)):
            if nums[i] > max and -abs(nums[i]) in nums:
                max = nums[i]

        return max