/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let rulekeyno;
    if(ruleKey === "type"){
        rulekeyno = 0;
    } else if(ruleKey === "color"){
        rulekeyno = 1;
    } else if(ruleKey === "name"){
        rulekeyno = 2;
    } else {
        return 0;
    }

    let matched = 0;
    for(let i=0; i<items.length; i++){
        if(items[i][rulekeyno] === ruleValue){
            matched += 1;
        }
    }

    return matched;
};