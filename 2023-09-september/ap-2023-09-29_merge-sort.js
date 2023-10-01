// Array: Merge Sort

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];

function mergeSort(arr) {

    if (arr.length > 1) {
        let middle = Math.floor(arr.length-1)
        let leftArray = arr.slice(0, middle);
        let rightArray = arr.slice(middle);
        return mergeSortedArrays(mergeSort(leftArray), mergeSort(rightArray))
    }

    else if (arr.length === 1) {
        return arr;
    }
}

// helper function
function mergeSortedArrays(arr1, arr2) {

    let sortedArray = [];
    let leftIDX = 0;
    let rightIDX = 0;

    while (leftIDX + rightIDX < arr1.length + arr2.length)
        switch (true) {

            case (arr1[leftIDX] <= arr2[rightIDX] || !arr2[rightIDX]):
                sortedArray.push(arr1[leftIDX]);
                leftIDX++;
                break;
                
            case (arr1[leftIDX] > arr2[rightIDX] || !arr1[leftIDX]):
                sortedArray.push(arr2[rightIDX]);
                rightIDX++;
                break;
        }

    return sortedArray;
}

console.log(mergeSort(testArr))