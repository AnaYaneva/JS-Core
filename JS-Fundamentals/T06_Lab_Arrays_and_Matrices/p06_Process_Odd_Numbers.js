/**
 * Created by PC on 3.6.2017 г..
 */
function odds(input){
    "use strict";
    let arr=input.filter((e,i)=>i%2!=0).map(e=>e*2).reverse();
    console.log(arr.join(' '));
}

odds([10, 15, 20, 25]);