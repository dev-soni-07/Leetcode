class Solution(object):
    def findIntersectionValues(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        result = []
        count = 0
        for i in range(len(nums1)):
            if nums1[i] in nums2:
                count += 1
        result.append(count)
        count = 0
        for i in range(len(nums2)):
            if nums2[i] in nums1:
                count += 1
                
        result.append(count)
        return result