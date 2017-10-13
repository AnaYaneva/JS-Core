/**
 * Created by PC on 30.5.2017 г..
 */
function calculator(a,b,op) {
    let calc = function(a, b, op) {
        return op(a, b)
    };

    let add = function(a, b) { return a + b };
    let subtract = function(a, b) { return a - b };
    let multiply = function(a, b) { return a * b };
    let divide = function(a, b) { return a / b };

    switch (op) {
        case '+': return calc(a, b, add);
        case '-': return calc(a, b, subtract);
        case '*': return calc(a, b, multiply);
        case '/': return calc(a, b, divide);
    }

}