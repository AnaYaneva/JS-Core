/**
 * Created by PC on 30.5.2017 г..
 */
function calculateQuadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c);

    if(d > 0) {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        console.log(x2);
        console.log(x1);
    } else if (d == 0) {
        let x1 = -b / (2*a);
        console.log(x1);
    } else {
        console.log('No');
    }

}