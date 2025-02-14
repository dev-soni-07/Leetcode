/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let count0 = 0, count1 = 0;

        for (let j = i; j < s.length; j++) {
            if (s[j] === '0') {
                if (count1 > 0) break;
                count0++;
            } else {
                count1++;
            }

            if (count0 === count1) {
                maxLength = Math.max(maxLength, count0 * 2);
            }
        }
    }

    return maxLength;
};