class Solution(object):
    def mostWordsFound(self, sentences):
        maxnum = 0
        for i in sentences:
            space = 0
            for j in range(len(i)):
                if i[j] == ' ':
                    space += 1
            if maxnum < space +1:
                maxnum = space + 1 
        return maxnum

# Shorthand approach:
# return max(len(word.split()) for word in sentences)