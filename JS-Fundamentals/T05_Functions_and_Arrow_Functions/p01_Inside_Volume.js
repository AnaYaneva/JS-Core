/**
 * Created by PC on 2.6.2017 г..
 */
function solve(input) {
    for (let i = 0; i < input.length; i+=3) {
        let x = input[i];
        let y = input[i+1];
        let z = input[i+2];

        if(inVol(x,y,z)){
            console.log('inside');
        }else{
            console.log('outside');
        }
    }

    function inVol(x,y,z) {
        let x1=10,x2=50;
        let y1=20,y2=80;
        let z1=15,z2=50;

        if(x>=x1&&x<=x2){
            if(y>=y1&&y<=y2){
                if(z>=z1&&z<=z2){
                    return true;
                }
            }
        }
        return false;
    }


}

solve([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);