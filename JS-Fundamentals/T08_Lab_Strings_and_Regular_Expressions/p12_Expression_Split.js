/**
 * Created by PC on 7.6.2017 г..
 */
function expressionSplit(expression) {

    let elements = expression
        .split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}