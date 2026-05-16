/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
    s = s.slice(1, -1); // remove '(' and ')'
    
    const result = [];
    
    // Generate all valid numbers from a string
    function generate(str) {
        const ans = [];
        
        // Case 1: whole number
        if (
            str.length === 1 || 
            str[0] !== '0'
        ) {
            ans.push(str);
        }
        
        // Case 2: decimal numbers
        for (let i = 1; i < str.length; i++) {
            let left = str.slice(0, i);
            let right = str.slice(i);
            
            // left cannot have leading zeros unless exactly "0"
            // right cannot end with zero
            if (
                (left.length === 1 || left[0] !== '0') &&
                right[right.length - 1] !== '0'
            ) {
                ans.push(left + "." + right);
            }
        }
        
        return ans;
    }
    
    // Split into two parts
    for (let i = 1; i < s.length; i++) {
        let leftPart = s.slice(0, i);
        let rightPart = s.slice(i);
        
        let leftNums = generate(leftPart);
        let rightNums = generate(rightPart);
        
        for (let a of leftNums) {
            for (let b of rightNums) {
                result.push(`(${a}, ${b})`);
            }
        }
    }
    
    return result;
};