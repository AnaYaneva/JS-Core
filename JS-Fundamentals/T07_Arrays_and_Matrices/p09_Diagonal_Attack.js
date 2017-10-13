/**
 * Created by PC on 4.6.2017 г..
 */
function diagonalAttack(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(' ').map(Number);
    }
    let lefSum = 0;
    let rightSum = 0;
    for (let row = 0; row < input.length; row++) {
        lefSum += input[row][row];
        rightSum += input[row][input[row].length-1-row];
    }
    if (rightSum == lefSum) {
        for (let row = 0; row < input.length; row++) {
            for (let col = 0; col < input[row].length; col++) {
                if ((row == row && col == row) || (row == row && col== input[row].length-1-row)) {
                    continue;
                } else {
                    input[row][col] = rightSum;
                }
            }
        }
    }
    input.forEach((e)=> console.log(e.join(' ')));
}