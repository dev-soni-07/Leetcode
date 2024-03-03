class Solution(object):
    def balancedStringSplit(self, s):
        answer = 0
        balance = 0
        for i in range(len(s)):
            if s[i] == 'L':
                balance += 1
            else:
                balance -= 1
            if balance == 0:
                answer += 1

        return answer
        