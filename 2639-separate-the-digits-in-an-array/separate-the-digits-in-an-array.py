class Solution(object):
    def separateDigits(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for num in nums:
            digits = list(str(num))
            for digit in digits:
                result.append(int(digit))

        return result