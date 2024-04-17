class Solution(object):
    def sortPeople(self, names, heights):
        """
        :type names: List[str]
        :type heights: List[int]
        :rtype: List[str]
        """
        sorted_names = [x for _, x in sorted(zip(heights, names), reverse=True)]
        return sorted_names