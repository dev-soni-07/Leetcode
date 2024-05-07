class Solution(object):
    def decodeMessage(self, key, message):
        """
        :type key: str
        :type message: str
        :rtype: str
        """
        substitution_table = {}
        key_index = 0
        
        for char in key:
            if char != ' ' and char not in substitution_table:
                substitution_table[char] = chr(ord('a') + key_index)
                key_index += 1
        
        decoded_message = ''
        
        for char in message:
            if char == ' ':
                decoded_message += ' '
            elif char in substitution_table:
                decoded_message += substitution_table[char]
        
        return decoded_message