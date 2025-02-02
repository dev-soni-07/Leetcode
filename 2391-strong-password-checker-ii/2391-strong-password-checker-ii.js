/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if (password.length < 8) return false;

    const specialCharacters = "!@#$%^&*()-+";
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (i > 0 && char === password[i - 1]) {
            return false;
        }

        if (char >= 'a' && char <= 'z') hasLower = true;
        else if (char >= 'A' && char <= 'Z') hasUpper = true;
        else if (char >= '0' && char <= '9') hasDigit = true;
        else if (specialCharacters.includes(char)) hasSpecial = true;
    }

    return hasLower && hasUpper && hasDigit && hasSpecial;
};