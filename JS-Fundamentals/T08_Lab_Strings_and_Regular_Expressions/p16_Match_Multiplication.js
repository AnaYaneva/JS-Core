/**
 * Created by PC on 7.6.2017 г..
 */
function performMultiplications(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}
