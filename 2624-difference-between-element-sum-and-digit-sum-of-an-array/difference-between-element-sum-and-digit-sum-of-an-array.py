class Solution(object):
    def differenceOfSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        elementSum = 0
        digitSum = 0
        for i in range(len(nums)):
            elementSum += nums[i]
            for digit in str(nums[i]):
                digitSum += int(digit)

        return elementSum - digitSum