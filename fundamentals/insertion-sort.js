function insertionSort(array) {
    //* edge cases
    if (array.length <= 1) return array;

    let i, j, key;
    for (i = 0; i < array.length; i++) {
        key = array[i]; //* item to be sorted

        //*  compare all items left of key
        j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j+1] = array[j]
            j--; 
         }
        //* insert correct element into sorted array 
        array[j+1] = key
    }

    return array;
}

test = [5, 4, 3, 2, 1];
console.log(insertionSort(test));
