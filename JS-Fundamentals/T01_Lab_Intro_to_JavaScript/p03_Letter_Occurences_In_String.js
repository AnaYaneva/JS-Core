/**
 * Created by PC on 23.5.2017 г..
 */
function letters(input, letter) {
    let counter=0;
    for(let i=0;i<input.length;i++){
        if(input[i]==letter){
            counter++;
        }
    }

    return counter;
}