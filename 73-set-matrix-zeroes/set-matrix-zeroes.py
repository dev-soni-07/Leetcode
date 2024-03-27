class Solution(object):
    def setZeroes(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        if not matrix:
            return
    
        rows = set()
        cols = set()
        
        # Find the rows and columns containing zeros
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    rows.add(i)
                    cols.add(j)
        
        # Set entire rows to zero
        for row in rows:
            matrix[row] = [0] * len(matrix[row])
        
        # Set entire columns to zero
        for col in cols:
            for i in range(len(matrix)):
                matrix[i][col] = 0