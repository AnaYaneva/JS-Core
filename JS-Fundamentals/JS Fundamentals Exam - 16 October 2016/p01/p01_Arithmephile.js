/**
 * Created by PC on 13.6.2017 г..
 */
function solve(input) {
    input=input.map(Number);
    let multypl=1;

    for (let i=0;i<input.length;i++) {
        if(input[i]>=0&&input[i]<10){
            let mul=1;
            for (var j = i+1; j <= i+input[i]; j++) {
                mul*=input[j];
            }
            if(mul>multypl){
                multypl=mul;
            }
        }
    }
    console.log(multypl);
}

solve([
    '10',
    '20',
    '2',
    '30',
    '44',
    '3',
    '56',
    '20',
    '24'
]);

solve([
    '100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1'
]);