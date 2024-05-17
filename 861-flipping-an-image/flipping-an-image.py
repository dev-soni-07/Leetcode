class Solution(object):
    def flipAndInvertImage(self, image):
        """
        :type image: List[List[int]]
        :rtype: List[List[int]]
        """
        for row in image:
            row.reverse()
            for j in range(len(row)):
                row[j] = 1 - row[j]
        return image