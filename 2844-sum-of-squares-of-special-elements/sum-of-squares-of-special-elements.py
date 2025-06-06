class Solution(object):
    def sumOfSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        sum_squares = 0
        n = len(nums)
        for i in range(n):
            if n % (i + 1) == 0:
                sum_squares += nums[i] ** 2
        return sum_squares