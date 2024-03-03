class Solution(object):
    def defangIPaddr(self, address):
        return_address = ''
        for i in address:
            if i == '.':
                return_address += '[.]'
            else:
                return_address += i
        return return_address
        # Below is optimised
        # return address.replace("." , "[.]");

        