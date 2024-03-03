class Solution(object):
    def findWordsContaining(self, words, x):
        result = []
        for i in range(0, len(words)):
            print(i)
            for j in words[i]:
                print(j)
                if j == x:
                    result.append(i)
                    break
        return result


