/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    const longestCommonPrefix = (s1, s2, s3) => {
        let i = 0;
        while (i < s1.length && i < s2.length && i < s3.length && s1[i] === s2[i] && s1[i] === s3[i]) {
            i++;
        }
        return i;
    };

    const lcpLength = longestCommonPrefix(s1, s2, s3);

    if (lcpLength === 0) {
        return -1;
    }

    const deletionsS1 = s1.length - lcpLength;
    const deletionsS2 = s2.length - lcpLength;
    const deletionsS3 = s3.length - lcpLength;

    return deletionsS1 + deletionsS2 + deletionsS3;
};