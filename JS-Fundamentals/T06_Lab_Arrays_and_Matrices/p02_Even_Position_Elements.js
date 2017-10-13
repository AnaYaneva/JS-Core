/**
 * Created by PC on 3.6.2017 г..
 */
function even (input) {
    let arr=[];
    for (var i = 0; i < input.length; i++) {
        if (i%2==0){
          arr.push(input[i]);
        }
    }

    return arr.join(' ');
}

console.log(even(['20', '30', '40']));