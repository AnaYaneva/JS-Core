/**
 * Created by PC on 2.8.2017 г..
 */
function getInfo() {
    let stopId=$('#stopId').val();
    let list=$('#buses');
    list.empty();
//    $.get(`https://judgetests.firebaseio.com/businfo/${stopId}.json`).then(displayBusStopInfo)
//        .catch(displayError);

//
    let getRequest={
        method:'GET',
        url:`https://judgetests.firebaseio.com/businfo/${stopId}.json`,
        success:displayBusStopInfo,
        error:displayError
    };

    $.ajax(getRequest);
    //

    function displayBusStopInfo(busStopInfo) {
        $('#stopName').text(busStopInfo.name);
        let buses=busStopInfo.buses
        for (let busNum in buses) {
            let busMinutes=buses[busNum];
            let liItem=$('<li>');
            liItem.text(`Bus ${busNum} arrives in ${busMinutes} minutes`);
            list.append(liItem);
        }
    }

    function displayError() {
        $('#stopName').text('Error');
    }
}