/**
 * Created by PC on 7.6.2017 г..
 */
function concatAndRev(input) {
    let str="";
    for (let string of input) {
        str+=string;
    }

    let revStr=Array.from(str);
    console.log(revStr.reverse().join(''));
}

concatAndRev(['I', 'am', 'student']);