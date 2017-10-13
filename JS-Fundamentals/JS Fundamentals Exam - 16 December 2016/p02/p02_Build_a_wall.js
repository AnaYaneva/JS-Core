/**
 * Created by PC on 13.6.2017 г..
 */
function wall(input) {
    let wall=input.map(Number);
    let concrete=[];

    while(true){
        if(wall.reduce((a,b)=>a+b)==30*wall.length)break;
        let count=0;
        for (var i = 0; i < wall.length; i++) {
            if(wall[i]<30){
                wall[i]++;
                count++;
            }
        }
        concrete.push(count*195);
    }
    console.log(concrete.join(', '));
   let sum= concrete.reduce((a,b)=>a+b)*1900;
    console.log(`${sum} pesos`);
}

wall(['21','25', '28']);
wall(['17']);
wall(['17','22', '17','19','17']);