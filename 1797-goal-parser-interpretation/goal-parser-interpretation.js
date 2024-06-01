/**
 * @param {string} command
 * @return {string}
 */
var interpret = (command) => {
    let result = "";
    let i = 0;
    while (i < command.length) {
        if (command[i] === "G") {
            result += "G";
            i += 1;
        } else if (command.substring(i, i + 2) === "()") {
            result += "o";
            i += 2;
        } else if (command.substring(i, i + 4) === "(al)") {
            result += "al";
            i += 4;
        }
    }
    return result;
};