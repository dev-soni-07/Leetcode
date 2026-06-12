/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    const words = s.split(" ");
    const maxLen = Math.max(...words.map(word => word.length));
    
    const result = [];
    
    for (let i = 0; i < maxLen; i++) {
        let row = "";
        
        for (let word of words) {
            row += i < word.length ? word[i] : " ";
        }
        
        result.push(row.replace(/\s+$/g, ""));
    }
    
    return result;
};