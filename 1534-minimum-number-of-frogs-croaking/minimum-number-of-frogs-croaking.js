
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */


var minNumberOfFrogs = function(croakOfFrogs) {
    const count = {
        c: 0,
        r: 0,
        o: 0,
        a: 0,
        k: 0
    };

    let frogs = 0;
    let maxFrogs = 0;

    for (const ch of croakOfFrogs) {
        count[ch]++;

        if (ch === 'c') {
            frogs++;
            maxFrogs = Math.max(maxFrogs, frogs);
        }
        else if (ch === 'r') {
            if (count.r > count.c) return -1;
        }
        else if (ch === 'o') {
            if (count.o > count.r) return -1;
        }
        else if (ch === 'a') {
            if (count.a > count.o) return -1;
        }
        else if (ch === 'k') {
            if (count.k >= count.a + 1) return -1;
            frogs--;
        }
    }

    if (frogs !== 0) return -1;

    if (
        count.c !== count.r ||
        count.r !== count.o ||
        count.o !== count.a ||
        count.a !== count.k
    ) {
        return -1;
    }

    return maxFrogs;
};
