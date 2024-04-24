class Solution(object):
    def maxDepth(self, s):
        """
        :type s: str
        :rtype: int
        """
        depth = 0
        current_depth = 0
        for char in s: 
            if char == '(':
                current_depth += 1
                depth = max(depth, current_depth)

            elif char == ')':
                current_depth -= 1
        return depth