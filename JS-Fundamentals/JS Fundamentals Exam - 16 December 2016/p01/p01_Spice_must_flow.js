/**
 * Created by PC on 13.6.2017 г..
 */
function solve (input) {
    let yield=Number(input);

    let days=0;
    let sum=0;

    while(yield>=100){
        sum+=yield;
        yield-=10;
        days++;
    }

    let consumated=(days+1) * 26;
    if(consumated>sum){
        consumated=sum;
    }
    console.log(days);
    console.log((sum - consumated));
}

solve(111);
solve(450);
solve(0);solve(200);