class Solution(object):
    def diagonalSum(self, mat):
        """
        :type mat: List[List[int]]
        :rtype: int
        """
        n = len(mat)
        diagonal_sum = 0
        for i in range(n):
            diagonal_sum += mat[i][i]
            if i != n - i - 1:
                diagonal_sum += mat[i][n - i - 1]
        return diagonal_sum