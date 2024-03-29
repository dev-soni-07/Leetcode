class Solution(object):
    def sumIndicesWithKSetBits(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        result = 0
        for i in range(len(nums)):
            if (str(bin(i)).count("1")) == k:
                result += nums[i]

        return result