/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
    "use strict";
    let map = new Map();
    for (let i = 0; i<input.length; i++) {
        let [town, pop] = input[i].split(' <-> ');
        if(!map.has(town)) {
            map.set(town, 0);
        }
        map.set(town, map.get(town) + Number(pop));
    }

    [...map].forEach(([town, pop]) => console.log(`${town} : ${pop}`));

}