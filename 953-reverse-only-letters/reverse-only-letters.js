/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const isValidLetter = (letter) => {
        return letter.match(/[a-zA-Z]/);
    }

    const swap = (arr, firstIndex, secondIndex) => {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    }

    let arr = s.split(''), leftPointer = 0, rightPointer = arr.length - 1;

    while (leftPointer <= rightPointer) {
        if (isValidLetter(arr[leftPointer]) && isValidLetter(arr[[rightPointer]])) {
            swap(arr, leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        } else if (!isValidLetter(arr[leftPointer])) {
            leftPointer++;
        } else if (!isValidLetter(arr[rightPointer])) {
            rightPointer--;
        } else {
            leftPointer++;
            rightPointer--;
        }
    }

    s = arr.join('');

    return s;
};