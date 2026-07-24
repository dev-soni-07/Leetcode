/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {

    function matches(query, pattern) {
        let i = 0, j = 0;

        while (i < query.length) {
            if (j < pattern.length && query[i] === pattern[j]) {
                i++;
                j++;
            } else if (query[i] >= 'a' && query[i] <= 'z') {
                i++;
            } else {
                return false;
            }
        }

        return j === pattern.length;
    }

    return queries.map(query => matches(query, pattern));
};