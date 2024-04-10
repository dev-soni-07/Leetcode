class Solution(object):
    def arithmeticTriplets(self, nums, diff):
        """
        :type nums: List[int]
        :type diff: int
        :rtype: int
        """
        count = 0
        for i in range(len(nums)):
            for j in range(i):
                for k in range(j):
                    if abs(nums[j] - nums[i]) == diff and abs(nums[k] - nums[j]) == diff:
                        count += 1

        return count