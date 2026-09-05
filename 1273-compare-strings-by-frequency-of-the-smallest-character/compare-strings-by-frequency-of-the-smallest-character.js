/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    function f(s) {
        let smallest = s[0];

        for (let ch of s) {
            if (ch < smallest) {
                smallest = ch;
            }
        }

        let count = 0;

        for (let ch of s) {
            if (ch === smallest) {
                count++;
            }
        }

        return count;
    }

    let wordFreq = words.map(f);

    wordFreq.sort((a, b) => a - b);

    function upperBound(target) {
        let left = 0;
        let right = wordFreq.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (wordFreq[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    return queries.map(query => {
        let queryFreq = f(query);
        let firstGreater = upperBound(queryFreq);

        return wordFreq.length - firstGreater;
    });
};