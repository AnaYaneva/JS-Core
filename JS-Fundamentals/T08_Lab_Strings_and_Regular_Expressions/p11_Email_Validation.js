/**
 * Created by PC on 7.6.2017 г..
 */

function validateEmail(email) {
    let pattern =
        /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
