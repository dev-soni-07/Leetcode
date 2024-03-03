class Solution(object):
    def truncateSentence(self, s, k):
        spaceCounter = 0
        temp = list(s)
        q = []
        for i in range(len(s)):
            if spaceCounter < k:
                if temp[i] == ' ':
                    q.append(temp[i])
                    spaceCounter += 1
                else: 
                    q.append(temp[i])
            else:
                break

        str1 = ''
        for ele in q:
            str1 += ele
        return str1.strip()