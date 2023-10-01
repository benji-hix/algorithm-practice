//* bubblesort
const { performance } = require('perf_hooks');
const start = performance.now();

function bubblesort(array) {
    let length = array.length - 1;
    let swapped;

    do {
        swapped = false;
        for (let j = 0; j < length; j++) {
            if (array[j] > [array[j + 1]]) {
                swap(array, j)
                swapped = true; 
            }
        }
    } while (swapped);

    return array;
}

function swap(array, index) {
    const temp = array[index];
    array[index] = array[index + 1]
    array[index + 1] = temp
}

//* nested for loop version 
// function bubblesort2(array) {
//     let length = array.length - 1;

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }

//     return array;
// }

test = [1, 3, 5, 8, 7, 9, 4];
console.log(bubblesort(test));
console.log(`PERFORMANCE: script ran for ${performance.now() - start} milliseconds.`);
