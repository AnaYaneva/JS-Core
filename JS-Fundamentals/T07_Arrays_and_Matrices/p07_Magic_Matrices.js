/**
 * Created by PC on 4.6.2017 г..
 */
function isMatrixMagic(matrix) {
    let matrixCol = 0;
    let matrixRow = 0;
    for (let row = 0; row < matrix.length; row++) {
        let colSum = 0;
        let rowSum = 0;
        if (matrix.length == matrix[row].length) {
            for (let col = 0; col < matrix[row].length; col++) {
                colSum += Number(matrix[row][col]);
            }
        } else {
            return false;
        }
        if (row == 0) {
            matrixCol = colSum;
        }
        if (matrixCol != colSum) {
            return false;
        }
    }
    return true;
}