/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        if(richest<wealth){
            richest = wealth;
        }
    }

    return richest;
};