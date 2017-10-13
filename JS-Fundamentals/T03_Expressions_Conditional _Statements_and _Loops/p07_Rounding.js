/**
 * Created by PC on 30.5.2017 г..
 */
function rounding([number, n]) {

    let denominator = Math.pow(10,n);
    let second = Math.round(number*denominator)/denominator;
    console.log(second);

}