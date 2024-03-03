class Solution(object):
    def countMatches(self, items, ruleKey, ruleValue):
        ruleKeys = ['type', 'color', 'name']
        count = 0
        index = -1

        for i in range(len(ruleKeys)):
            if ruleKeys[i] == ruleKey:
                index = i

        for i in range(len(items)):
            if index != -1 and items[i][index] == ruleValue:
                count += 1
        return count