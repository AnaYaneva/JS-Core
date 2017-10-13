/**
 * Created by PC on 30.5.2017 г..
 */
function printOddNumbers(n) {
    let numbers = '';
    for (let i = 0; i<= n; i++) {
        if(i % 2 != 0) {
            numbers += `${i}\n`;
        }
    }
    return numbers;
}