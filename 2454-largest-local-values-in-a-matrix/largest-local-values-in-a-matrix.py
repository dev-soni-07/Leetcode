class Solution(object):
    def largestLocal(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[List[int]]
        """
        n = len(grid)
        maxLocal = []
        for i in range(n - 2):
            row = []
            for j in range(n - 2):
                max_val = float('-inf')
                for k in range(3):
                    for l in range(3):
                        max_val = max(max_val, grid[i + k][j + l])
                row.append(max_val)
            maxLocal.append(row)

        return maxLocal
