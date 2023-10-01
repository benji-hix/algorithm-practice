function insertionSort(array) {
    if (array.length <= 1) return array;

    let i, j, key;

    for (i = 0; i < array.length; i++) {
        //* item to be sorted
        key = array[i];
        //*  compare all items left of key
        j = i - 1;
        while (j >= 0 && array[j] > key) {
            console.log(array[i]);
            console.log(key);
            swap(array, j, j + 1);
            j--; //* compare next item to the left
        }
    }

    return array;
}

function swap(array, indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

test = [5, 7, 8, 3, 3, 2, 4, 1];
console.log(insertionSort(test));
