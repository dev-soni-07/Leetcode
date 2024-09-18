/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let isRansomNote = true;

    let ransomNoteArr = ransomNote.split('');
    let magazineArr = magazine.split('');

    ransomNoteArr.forEach((note) => {
        if(magazineArr.includes(note)) {
            magazineArr.splice(magazineArr.indexOf(note), 1);
        } else {
            isRansomNote = false;
        }
    });

    return isRansomNote;
};