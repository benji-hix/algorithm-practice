//* bubblesort

function bubblesort(array) {
    let length = array.length - 1;
    let swapped;
    //* iterate througoh the array until there is a pass where no
    //* elements are swapped
    do {
        swapped = false;
        for (let j = 0; j < length; j++) {
            if (array[j] > [array[j + 1]]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

test = [3, 7, 8, 9, 1, 5, 9, 2];
console.log(bubblesort(test));
