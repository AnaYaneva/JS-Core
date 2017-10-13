/**
 * Created by PC on 3.6.2017 г..
 */
function biggest(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}