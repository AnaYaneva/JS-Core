/**
 * Created by PC on 27.5.2017 г..
 */
function nextDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" +
        (nextDate.getMonth() + 1) + '-' +
        nextDate.getDate();

}

let date=nextDay(2016, 9, 30);
console.log(date);