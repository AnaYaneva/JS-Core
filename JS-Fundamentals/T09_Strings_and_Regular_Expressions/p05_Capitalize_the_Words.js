/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
let regex=/\b([A-z])([\w]*)\b/g;
    console.log(input.replace(regex, (full, gr1, gr2) => gr1.toUpperCase() + gr2.toLowerCase()));
}

solve();