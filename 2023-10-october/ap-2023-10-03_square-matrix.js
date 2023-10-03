function diagonalDifference (matrix) {
    let sum1 = 0, sum2 = 0;
    //* loop through array, pulling relevant numbers from each nested array
    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i]
        sum2 += matrix[i][matrix.length-1-i]
    }
    //* 
    return Math.abs(sum1 - sum2)
}

testMatrix = [[1,1,1,1], [4,5,6,7], [7,8,9,2], [6, 3, 7, 1]]
console.log(diagonalDifference(testMatrix))
