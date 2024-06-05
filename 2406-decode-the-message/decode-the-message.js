/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let substitution_table = {};
    let key_index = 0;

    for (let char of key) {
        if (char !== " " && !(char in substitution_table)) {
            substitution_table[char] = String.fromCharCode('a'.charCodeAt(0) + key_index);
            key_index += 1;
        }
    }

    let decoded_message = "";

    for (let char of message) {
        if (char === " ") {
            decoded_message += " ";
        } else if (char in substitution_table) {
            decoded_message += substitution_table[char];
        }
    }

    return decoded_message;
};