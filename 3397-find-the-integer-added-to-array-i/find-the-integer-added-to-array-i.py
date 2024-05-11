class Solution(object):
    def addedInteger(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """
        diff_sum = 0
    
        for i in range(len(nums1)):
            diff = nums2[i] - nums1[i]
            diff_sum += diff
    
        x = diff_sum // len(nums1)
    
        return x