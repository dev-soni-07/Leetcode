class OrderedStream(object):

    def __init__(self, n):
        """
        :type n: int
        """
        self.stream = [None] * n
        self.pointer = 0

    def insert(self, idKey, value):
        """
        :type idKey: int
        :type value: str
        :rtype: List[str]
        """
        self.stream[idKey - 1] = value
        chunk = []
        while self.pointer < len(self.stream):
            if self.stream[self.pointer] is None:
                break
            chunk.append(self.stream[self.pointer])
            self.pointer += 1
        return chunk


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)