class Solution(object):
    def firstPalindrome(self, words):
        """
        :type words: List[str]
        :rtype: str
        """
        for s in words:
            n = []
            s1 = []
            for i in range(97, 123):
                n.append(i)

            for i in range(len(s)):
                if ord(s[i]) in n:
                    s1.append(s[i])

            s = ""
            s = s.join(s1)
            if s[::1] == s[::-1]:
                return s
        else: 
            return ''

        