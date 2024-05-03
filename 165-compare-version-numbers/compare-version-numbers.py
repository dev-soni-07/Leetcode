class Solution(object):
    def compareVersion(self, version1, version2):
        """
        :type version1: str
        :type version2: str
        :rtype: int
        """
        v1_revisions = version1.split('.')
        v2_revisions = version2.split('.')
        
        n = max(len(v1_revisions), len(v2_revisions))
        
        for i in range(n):
            v1_rev = int(v1_revisions[i]) if i < len(v1_revisions) else 0
            v2_rev = int(v2_revisions[i]) if i < len(v2_revisions) else 0
            
            if v1_rev < v2_rev:
                return -1
            elif v1_rev > v2_rev:
                return 1
        
        return 0