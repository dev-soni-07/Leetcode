class Solution(object):
    def countPairs(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        pairs = 0
        for i in range(len(nums)):
            for j in range(len(nums) -1, -1, -1):
                if i < j:
                    if nums[i] == nums[j] and ((i * j) % k) == 0:
                        pairs += 1

        return pairs
