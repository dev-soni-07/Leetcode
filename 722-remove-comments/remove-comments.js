/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let result = [];
    let inBlock = false;
    let buffer = "";

    for (let line of source) {
        let i = 0;

        if (!inBlock) buffer = "";

        while (i < line.length) {
            if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
                break;
            } 
            else if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
                inBlock = true;
                i += 2;
            } 
            else if (inBlock && i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
                inBlock = false;
                i += 2;
            } 
            else {
                if (!inBlock) {
                    buffer += line[i];
                }
                i++;
            }
        }

        if (!inBlock && buffer.length > 0) {
            result.push(buffer);
        }
    }

    return result;
};