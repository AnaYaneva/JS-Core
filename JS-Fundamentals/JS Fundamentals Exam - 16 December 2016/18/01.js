function solve(base, incr){
    base=Number(base);
    incr=Number(incr);

    let stone=0;
    let marble=0;
    let lapis=0;
    let gold=0;

    let step=0;

    while(base>2){
       step++;
       if(step%5===0){
           lapis+=base*4-4;
       }else{
           marble+=base*4-4;
       }

       stone+=(base-2)*(base-2);

       base-=2;
    }


    gold=Math.ceil(base*base*incr);
    stone=Math.ceil(stone*incr);
    marble=Math.ceil(marble*incr);
    lapis=Math.ceil(lapis*incr);

    let hight=Math.floor((step+1)*incr);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${hight}`);
}


solve('12','1');
console.log();
solve('23','0.5');
console.log();
solve('11','0.75');