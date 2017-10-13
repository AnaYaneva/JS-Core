/**
 * Created by PC on 30.5.2017 г..
 */
function triangle(n){
    "use strict";
    function stars(i){
        console.log("*".repeat(i));
    }

    for(let j=1;j<=n;j++){
        stars(j);
    }
    for(let j=n-1;j>=1;j--){
        stars(j);
    }
}

triangle(5);