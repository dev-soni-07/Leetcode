/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let isLongPressed = true;
    let i = 0, j = 0;
    while(j < typed.length){
        if(name[i] === typed[j]){
            i++;
            j++;
        }else if(j > 0 && typed[j] === typed[j-1]){
            j++;
        }else{
            isLongPressed = false;
            break;
        }
    }

    if(i < name.length){
        isLongPressed = false;
    }

    return isLongPressed;
};