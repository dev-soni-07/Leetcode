/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let reverseAlphabets = {
        '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i',
        '10#': 'j', '11#': 'k', '12#': 'l', '13#': 'm', '14#': 'n', '15#': 'o', '16#': 'p', '17#': 'q', '18#': 'r', '19#': 's', '20#': 't', '21#': 'u', '22#': 'v', '23#': 'w', '24#': 'x', '25#': 'y', '26#': 'z'
    };

    let outputString = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            outputString += reverseAlphabets[s[i] + s[i + 1] + s[i + 2]];
            i += 2;
        } else {
            outputString += reverseAlphabets[s[i]];
        }
    }

    return outputString;
};