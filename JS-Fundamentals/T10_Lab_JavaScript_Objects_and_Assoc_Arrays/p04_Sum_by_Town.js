/**
 * Created by PC on 7.6.2017 г..
 */
function sumByTown(input){
    "use strict";
    let obj = {};
    for (let i = 0; i<input.length; i = i+2) {
        if(obj[input[i]] == undefined) {
            obj[input[i]] = Number(input[i+1]);
        } else {
            obj[input[i]] += Number(input[i+1]);
        }
    }
    console.log(JSON.stringify(obj));
}