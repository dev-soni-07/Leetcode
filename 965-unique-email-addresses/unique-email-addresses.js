/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const validLocalName = (localName) => {
        let validLocalName = '';

        for (let i = 0; i < localName.length; i++) {
            if (localName[i] === '.') {
                continue;
            } else if (localName[i] === '+') {
                break;
            } else {
                validLocalName += localName[i];
            }
        }

        return validLocalName;
    }

    let uniqueEmails = new Set();

    for (let email of emails) {
        let [localName, domainName] = email.split('@');
        let validLocal = validLocalName(localName);
        let validEmail = validLocal + '@' + domainName;
        uniqueEmails.add(validEmail);   
    }

    return uniqueEmails.size;
};