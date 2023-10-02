// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                              a
let arr1 = [1, 3, 3, 5, 8, 10,];
//                              b
let arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

//                   i
let arrA = [1, 3, 4, 5];
//                   j
let arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]


// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭

// initial solution (very verbose)
function mergeDedupe(arr1, arr2) {
    let i = 0, j = 0;
    const mergedArr = []
    let remainderArr = []

    while (i < arr1.length && j < arr2.length) {
        if (mergedArr(mergedArr.length-1) == arr1[i]) {
            i++
        }
        else if (mergedArr(mergedArr.length-1) == arr2[j]) {
            j++
        }
        else if (arr1[i] === arr2[j]) {
            mergedArr.push(arr1[i])
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        }
        else if (arr1[i] > arr2[j]) {
            mergedArr.push(arr2[j])
            j++
        }
    }
        //* handle remainder values
        if (arr1.length == arr2.length) return mergedArr;

        else if (arr1.length > arr2.length) {
            remainderArr = arr1.slice(i)
        }
        else {
            remainderArr = arr2.slice(j)
        }

        for (let k = 0; k < remainderArr.length; k++) {
            if (!mergedArr(mergedArr.length-1) == remainderArr[k]) {
                mergedArr.push(remainderArr[k])
            }
        }
        return mergedArr
    }



// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])) // [ 1, 3, 4, 5, 8, 10 ]

console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]