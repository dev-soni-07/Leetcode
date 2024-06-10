/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let alphabets = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
};
    let result = {};

    for (let i=0; i<words.length; i++){
        let temp = "";
        for (let char of words[i]){
            temp += alphabets[char]
        }
        if(!Object.values(result).includes(temp)){
            result[i] = temp;
        }
    }

    return Object.values(result).length;
};