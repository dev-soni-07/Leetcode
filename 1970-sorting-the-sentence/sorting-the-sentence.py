class Solution(object):
    def sortSentence(self, s):
        """
        :type s: str
        :rtype: str
        """
        words = s.split()
        word_dict = {}
        for word in words:
            word_dict[int(word[-1])] = word[:-1]
        
        sorted_words = [word_dict[i] for i in range(1, len(words) + 1 )]
        
        sorted_sentence = ' '.join(sorted_words)
        
        return sorted_sentence
