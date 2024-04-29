class Solution(object):
    def destCity(self, paths):
        """
        :type paths: List[List[str]]
        :rtype: str
        """
        outgoing_cities = set()
        destination = ""
        for path in paths:
            outgoing_cities.add(path[0])

        for path in paths:
            if path[1] not in outgoing_cities:
                destination = path[1]
                break
        
        return destination