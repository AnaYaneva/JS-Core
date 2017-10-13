/**
 * Created by PC on 1.7.2017 г..
 */
function timer() {
    let timer;
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');
    let start = $('#start-timer');
    $(start).on('click', function () {
        if (!timer) {
            timer = setInterval(step, 1000);
        }
    });

    let secs = 0;
    let mins = 0;
    let hour = 0;

    function step() {
        secs++;
        seconds.text(`0${secs}`.slice(-2));
        if (secs == 59) {
            secs = 0;
            mins++;
            minutes.text(`0${mins}`.slice(-2));

        }
        if (mins == 59) {
            mins = 0;
            hour++;
            hours.text(`0${hour}`.slice(-2));
        }

    }

    let stop = $('#stop-timer');

    $(stop).on('click', function () {
        clearInterval(timer);
        timer = undefined;
        seconds.text('00');
        minutes.text('00');
        hours.text('00');
        secs = 0;
        mins = 0;
        hour = 0;
    });
}
