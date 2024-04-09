class Solution(object):
    def decompressRLElist(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        result = []
        for i in range(1,len(nums),2):
            for j in range(nums[i-1]):
                result.append(nums[i])

        return result