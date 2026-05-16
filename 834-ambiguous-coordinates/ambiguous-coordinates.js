/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function(s) {
    s = s.slice(1, -1);
    
    const result = [];
    
    function generate(str) {
        const ans = [];
        
        if (
            str.length === 1 || 
            str[0] !== '0'
        ) {
            ans.push(str);
        }
        
        for (let i = 1; i < str.length; i++) {
            let left = str.slice(0, i);
            let right = str.slice(i);
            
            if (
                (left.length === 1 || left[0] !== '0') &&
                right[right.length - 1] !== '0'
            ) {
                ans.push(left + "." + right);
            }
        }
        
        return ans;
    }
    
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