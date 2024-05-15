class Solution(object):
    def removeOuterParentheses(self, s):
        """
        :type s: str
        :rtype: str
        """
        result = ""
        opened = 0

        for char in s:
            if char == "(":
                opened += 1

                if opened > 1:
                    result += "("

            elif char == ")":
                opened -= 1

                if opened > 0:
                    result += ")"

        return result