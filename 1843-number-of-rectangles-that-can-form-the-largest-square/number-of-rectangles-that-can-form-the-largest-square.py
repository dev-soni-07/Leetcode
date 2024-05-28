class Solution(object):
    def countGoodRectangles(self, rectangles):
        """
        :type rectangles: List[List[int]]
        :rtype: int
        """
        max_side_lengths = [min(l, w) for l, w in rectangles]
        
        max_len = max(max_side_lengths)
        
        count = sum(1 for side in max_side_lengths if side == max_len)
        
        return count