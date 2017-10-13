/**
 * Created by PC on 30.5.2017 г..
 */
function convertToFeetAndIncees(n) {
    let feets = Math.floor(n / 12);
    let inches = Math.ceil(n % 12);
    return `${feets}'-${inches}"`;

}