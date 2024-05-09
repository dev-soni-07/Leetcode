class Solution(object):
    def cellsInRange(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        col1 = ord(s[0]) - ord('A') + 1
        row1 = int(s[1])
        col2 = ord(s[3]) - ord('A') + 1
        row2 = int(s[4])
        
        cells = []
        for col in range(col1, col2 + 1):
            for row in range(row1, row2 + 1):
                cells.append(chr(col + ord('A') - 1) + str(row))
        
        cells.sort()
        
        return cells