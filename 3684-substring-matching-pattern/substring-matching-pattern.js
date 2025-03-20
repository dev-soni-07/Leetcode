/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function(s, p) {
    const [prefix, suffix] = p.split('*');

    const prefixIndex = s.indexOf(prefix);
    if (prefixIndex === -1) return false;

    const suffixIndex = s.indexOf(suffix, prefixIndex + prefix.length);
    if (suffixIndex === -1) return false;

    return prefixIndex + prefix.length <= suffixIndex;
};