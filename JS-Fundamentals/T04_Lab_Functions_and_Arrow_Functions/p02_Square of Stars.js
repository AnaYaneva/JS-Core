/**
 * Created by PC on 30.5.2017 г..
 */

function rectangle(n) {
    "use strict";
    function stars(i=n) {
        console.log("* ".repeat(i));
    }

    for (let j = 1; j <= n; j++) {
        stars();
    }
}
