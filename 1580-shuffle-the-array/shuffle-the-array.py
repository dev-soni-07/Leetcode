class Solution(object):
    def shuffle(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: List[int]
        """
        x = []
        y = []
        result = []
        for i in range(len(nums)):
            if i < len(nums)/2:
                x.append(nums[i])
            else:
                y.append(nums[i])

        for i in range(len(x)):
            result.append(x[i])
            result.append(y[i])
        return result