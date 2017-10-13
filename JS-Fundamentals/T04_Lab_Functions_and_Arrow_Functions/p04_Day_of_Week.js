/**
 * Created by PC on 30.5.2017 г..
 */
function dayOfWeek(day) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    function isValidDay(day) {
        if(weekDays.indexOf(day) != -1){
            return weekDays.indexOf(day)+1;
        }
        return 'error'

    }

    console.log(isValidDay(day));
}