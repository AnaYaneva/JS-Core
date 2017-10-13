/**
 * Created by PC on 28.5.2017 г..
 */
function leapYear(year) {
    let leap = (year % 4 == 0 && year % 100 != 0) ||
        (year % 400 == 0);
    console.log(leap ? "yes" : "no");
}
