/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let freqMap = new Map();
    let charCount = new Array(26).fill(0);

    let left = 0;
    let unique = 0;
    let ans = 0;
    
    for (let right = 0; right < s.length; right++) {
        let idx = s.charCodeAt(right) - 97;

        if (charCount[idx] === 0) unique++;
        charCount[idx]++;

        if (right - left + 1 > minSize) {
            let leftIdx = s.charCodeAt(left) - 97;

            charCount[leftIdx]--;
            if (charCount[leftIdx] === 0) unique--;

            left++;
        }

        if (right - left + 1 === minSize && unique <= maxLetters) {
            let sub = s.substring(left, right + 1);

            freqMap.set(sub, (freqMap.get(sub) || 0) + 1);

            ans = Math.max(ans, freqMap.get(sub));
        }
    }

    return ans;
};