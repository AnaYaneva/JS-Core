/**
 * Created by PC on 2.6.2017 г..
 */
function higher(input) {

    function average(input){
        "use strict";
        let sum=0;
        for (var i = 0; i < input.toString().length; i++) {
            sum+=Number(input[i]);
        }
        return sum/input.toString().length;
    }

    function add9(input) {
        return input+"9";
    }

    while(true){
        let aver=average(input);
        if(aver>5)break;

        input=add9(input);
    }

    console.log(input);
}

higher(101);