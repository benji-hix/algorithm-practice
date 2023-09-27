const { performance } = require('perf_hooks');
const start = performance.now();

function selectionSort(array) {
    for (let i = 0; i < array.length-1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        swap(array, i, minIndex)
    }

    return array;
}

function swap(array, indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB]
    array[indexB] = temp
}


const test1 = [3,2,9,5,1,4,8]
const test2 = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9]
console.log(selectionSort(test1));
console.log(selectionSort(test2));

console.log(`Performance: script ran for ${(performance.now() - start).toFixed(2)}ms.`)