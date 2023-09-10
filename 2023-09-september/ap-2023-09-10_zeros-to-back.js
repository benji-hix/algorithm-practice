// write an algorithm that takes an array and moves all of the zeros to th end, 
// preserving the order of the other elements

function moveZeros(arr) {
    let zeroCount = 0;
    let numberStorage = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
         zeroCount++
        }
        else numberStorage.push(arr[i]);
    }

    for (let j = 0; j < zeroCount; j++) {
        numberStorage.push(0)
    }

    return numberStorage
  }

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]) )