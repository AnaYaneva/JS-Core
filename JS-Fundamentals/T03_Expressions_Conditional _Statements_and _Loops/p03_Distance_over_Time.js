/**
 * Created by PC on 30.5.2017 г..
 */
function calculateDistance(input) {
    "use strict";
    // skorosta e km/h a vremeto sekundi
    //output izminatoto razstoqnie v metri


    let V1 = input[0];
    let V2 = input[1];
    let time = input[2];

    let converV1toMS = V1 * 0.277777778;
    let converV2toMS = V2 * 0.277777778;
    let distance = Math.abs(converV2toMS * time - converV1toMS * time);
    return distance;
}