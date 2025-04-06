/**
 * @param {string} s
 * @return {string}
 */
function getSmallestString(s) {
    const input = s.split("")
    for (let i = 0; i < input.length - 1; ++i) {
        const charA = input[i]
        const charB = input[i + 1]
        if (
            isSameParity(charA, charB) &&
            charB.charCodeAt(0) < charA.charCodeAt(0)
        ) {
            input[i] = charB
            input[i + 1] = charA
            break
        }
    }
    
    return input.join("")
};

function isSameParity(charA, charB) {
    const numberA = Number(charA)
    const numberB = Number(charB)

    return (
        isEven(numberA) && isEven(numberB) ||
        !isEven(numberA) && !isEven(numberB)
    )
}

function isEven(number) {
    return number % 2 === 0
}