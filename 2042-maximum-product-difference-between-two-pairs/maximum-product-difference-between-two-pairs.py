class Solution(object):
    def maxProductDifference(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        product = 0
        nums.sort()
        w = nums[0]
        x = nums[1]
        y = nums[len(nums)-1]
        z = nums[len(nums)-2]
        product = abs((w * x) - (y * z))
        return product