class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        runningSum = 0
        for i in range(len(nums)):
            runningSum += nums[i]
            nums[i] = runningSum

        return nums