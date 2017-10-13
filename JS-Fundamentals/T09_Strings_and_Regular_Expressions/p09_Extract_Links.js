/**
 * Created by PC on 7.6.2017 г..
 */
function extract(input) {
    "use strict";
    let regex =  /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].replace('_', ' ');
        if (input[i].match(regex)) {
            let a = input[i].match(regex);
            console.log(a[0]);
        }

    }
}
