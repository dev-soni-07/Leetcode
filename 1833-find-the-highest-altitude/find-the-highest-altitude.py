class Solution(object):
    def largestAltitude(self, gain):
        """
        :type gain: List[int]
        :rtype: int
        """
        sum = 0
        result = [0]
        for i in range(len(gain)):
            sum += gain[i]
            result.append(sum)

        return max(result)