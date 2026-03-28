/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    function parse(expr) {
        let xCoeff = 0;
        let constVal = 0;
        let sign = 1;
        let num = 0;
        let hasNum = false;
        
        for (let i = 0; i <= expr.length; i++) {
            let ch = expr[i];
            
            if (ch >= '0' && ch <= '9') {
                num = num * 10 + (ch - '0');
                hasNum = true;
            } 
            else if (ch === 'x') {
                xCoeff += sign * (hasNum ? num : 1);
                num = 0;
                hasNum = false;
            } 
            else {
                constVal += sign * num;
                num = 0;
                hasNum = false;
                
                if (ch === '+') sign = 1;
                else if (ch === '-') sign = -1;
            }
        }
        
        return [xCoeff, constVal];
    }
    
    let [leftX, leftConst] = parse(equation.split('=')[0]);
    let [rightX, rightConst] = parse(equation.split('=')[1]);
    
    let xCoeff = leftX - rightX;
    let constVal = rightConst - leftConst;
    
    if (xCoeff === 0 && constVal === 0) return "Infinite solutions";
    if (xCoeff === 0) return "No solution";
    
    return "x=" + (constVal / xCoeff);
};