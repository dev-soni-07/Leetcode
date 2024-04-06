class Solution(object):
    def sumOddLengthSubarrays(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        def isOdd(num):
            return num % 2 == 1

        sum = 0
        for i in range(len(arr)):
            temp = []
            for j in range(i, len(arr)):
                temp.append(arr[j])
                if isOdd(len(temp)):
                    for k in range(len(temp)):
                        sum += temp[k]

        return sum