class Solution(object):
    def leftRightDifference(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []

        for i in range(len(nums)):
            leftsum = 0
            rightsum = 0
            for j in range(i):
                leftsum += nums[j]
            for j in range(i+1, len(nums)):
                rightsum += nums[j]
            result.append(abs(leftsum - rightsum))
            
        return result