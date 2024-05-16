class Solution(object):
    def countAsterisks(self, s):
        """
        :type s: str
        :rtype: int
        """
        asterisk_count = 0
        inside_pair = False

        for char in s:
            if char == '|':
                inside_pair = not inside_pair
            elif char == '*' and not inside_pair:
                asterisk_count += 1
        
        return asterisk_count