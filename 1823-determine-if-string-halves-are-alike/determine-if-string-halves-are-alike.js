/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let a = s.slice(0, s.length / 2), b = s.slice(s.length / 2, s.length), vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'], avovels = 0, bvovels = 0;

    for (let i = 0; i < a.length; i++) {
        if (vovels.includes(a[i])) {
            avovels++;
        }
        if (vovels.includes(b[i])) {
            bvovels++;
        }
    }

    return avovels === bvovels;
};