/**
 * Created by PC on 2.6.2017 г..
 */
function radar(input) {
    let speed=input[0];
    let zone=input[1];

    function getLimit() {
        switch (zone){
            case 'motorway':return 130;
            case 'interstate':return 90;
            case 'city':return 50;
            case 'residential':return 20;
        }
    }
    let limit=getLimit();

    function getInfraction(speed, limit) {
        let overSpeed=speed-limit;
        if(overSpeed<=0){
            return "";
        }else{
            if(overSpeed<=20){
                return "speeding";
            }else if(overSpeed>0&&overSpeed<=40){
                return "excessive speeding";
            }else{
                return "reckless driving";
            }
        }
    }

    console.log(getInfraction(speed,limit));
}

//radar([40, city]);
radar([21, 'residential']);
radar([120, interstate]);
radar([200, motorway]);