
/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function(favoriteCompanies) {

    const result = [];

    const sets = favoriteCompanies.map(
        companies => new Set(companies)
    );

    for (let i = 0; i < sets.length; i++) {

        let isSubset = false;

        for (let j = 0; j < sets.length; j++) {

            if (i === j) continue;

            if (sets[i].size > sets[j].size) continue;

            let containsAll = true;

            for (const company of sets[i]) {
                if (!sets[j].has(company)) {
                    containsAll = false;
                    break;
                }
            }

            if (containsAll) {
                isSubset = true;
                break;
            }
        }

        if (!isSubset) {
            result.push(i);
        }
    }

    return result;
};
