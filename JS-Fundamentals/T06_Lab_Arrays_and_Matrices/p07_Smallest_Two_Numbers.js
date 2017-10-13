/**
 * Created by PC on 3.6.2017 г..
 */
function smallest2(input) {
    let arr=input.sort((a,b)=>a-b).slice(0,2);
    console.log(arr.join(' '));
}

smallest2([30, 15, 50, 5]);