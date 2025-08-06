/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    let words = caption.trim().split(/\s+/);

    let tag = words.map((word, index) => {
        word = word.toLowerCase();
        return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    }).join('');

    tag = '#' + tag;

    tag = '#' + tag.slice(1).replace(/[^a-zA-Z]/g, '');

    return tag.length > 100 ? tag.slice(0, 100) : tag;
};
