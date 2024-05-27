class Solution(object):
    def oddCells(self, m, n, indices):
        """
        :type m: int
        :type n: int
        :type indices: List[List[int]]
        :rtype: int
        """
        row_counts = [0] * m
        col_counts = [0] * n

        for r, c in indices:
            row_counts[r] += 1
            col_counts[c] += 1
        

        odd_count = 0
        for i in range(m):
            for j in range(n):
                if (row_counts[i] + col_counts[j]) % 2 == 1:
                    odd_count += 1
        
        return odd_count