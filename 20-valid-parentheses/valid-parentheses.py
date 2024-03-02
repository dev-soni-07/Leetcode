class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        top = -1
        opening = ['(', '[', '{']
        closing = [')', ']', '}']

        for i in range(len(s)):
            if s[i] in opening:
                stack.append(s[i])
                top += 1
            if s[i] in closing:
                if top >= 0 and (
                    stack[top] == '(' and s[i] == ')' or
                    stack[top] == '[' and s[i] == ']' or
                    stack[top] == '{' and s[i] == '}'
                ):
                    stack.pop()
                    top -= 1
                else:
                    return False

        return top == -1
        