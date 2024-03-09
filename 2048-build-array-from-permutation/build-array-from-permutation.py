class Solution(object):
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        n = len(nums)

        # Encode each pair (nums[i], nums[nums[i]]) using the formula
        # encoded_value = (nums[nums[i]] % n) * n + nums[i]
        for i in range(n):
            nums[i] += (nums[nums[i]] % n) * n

        # Extract the new values from the encoded pairs
        for i in range(n):
            nums[i] //= n

        return nums
        