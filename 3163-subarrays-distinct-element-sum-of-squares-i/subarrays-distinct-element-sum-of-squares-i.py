class Solution(object):
    def sumCounts(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total_sum = 0
        for i in range(len(nums)):
            distinct_counts = set()
            for j in range(i, len(nums)):
                distinct_counts.add(nums[j])
                total_sum += len(distinct_counts) ** 2
        return total_sum

