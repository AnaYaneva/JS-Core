/**
 * Created by PC on 4.6.2017 г..
 */
function increase(input){
    "use strict";
    let output=[];

    let max =input[0];
    output.push(max);

    for (let i = 1; i <input.length;i++){
       if(input[i]>=max){
           output.push(input[i]);
           max =input[i];
       }
    }

    for (let obj of output) {
        console.log(obj);
    }
}

function findSequence(input) {
    "use strict";
    let max = Number.MIN_SAFE_INTEGER;
    let arr=[];
    for (let i = 0; i<input.length; i++){
        if (input[i] >= max) {
            arr.push(input[i]);
            max = input[i];
        }
    }
    for (let e of arr){
        console.log(e);
    }
}

function filters(input) {
    console.log(input.filter((a) => a > a).join(' '));
}
findSequence([1, 2, 3, 10, 5, 13]);
//filters([1, 2, 3, 10, 5, 13]);
increase([1,3,8,4,10,12,3,2,24]);