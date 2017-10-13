/**
 * Created by PC on 3.6.2017 г..
 */
function elements (input) {
    let k=input.shift();

    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(input.length-k,
        input.length).join(' '));

}

elements([2,7,8,9]);