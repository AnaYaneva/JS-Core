/**
 * Created by PC on 4.6.2017 г..
 */
function rotate(input) {
    let n=Number(input.pop());
    let rot=n%input.length;
    for (let i = 0; i < rot; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotate(['1','2','3','4','2']);