/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const map = new Map();

    for (let entry of cpdomains) {
        let [count, domain] = entry.split(" ");
        count = Number(count);

        const parts = domain.split(".");

        for (let i = 0; i < parts.length; i++) {
            const subdomain = parts.slice(i).join(".");

            map.set(
                subdomain,
                (map.get(subdomain) || 0) + count
            );
        }
    }

    const result = [];

    for (let [domain, count] of map) {
        result.push(`${count} ${domain}`);
    }

    return result;
};