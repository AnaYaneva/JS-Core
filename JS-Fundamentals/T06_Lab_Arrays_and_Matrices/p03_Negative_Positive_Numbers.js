/**
 * Created by PC on 3.6.2017 г..
 */
function negative (input) {
    let arr=[];
    for (var i = 0; i < input.length; i++) {
        if (input[i]<0){
            arr.unshift(input[i]);
        }else{
            arr.push(input[i]);
        }
    }

    console.log( arr.join('\n'));
}

even([3, -2, 0, -1]);