/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
    "use strict";
    let map = new Map();
    for (let i = 0; i <input.length; i++) {

        let [town, mark, price] = input[i].split(' | ');
        price= Number(price);
        if (!map.has(mark)) {
            map.set(mark, new Map);
        }
        if(!map.get(mark).has(town)) {
            map.get(mark).set(town, price);
        } else {
            map.get(mark).delete(town);
            map.get(mark).set(town, price);

        }

    }
    // console.log(map);
    for (let [mark, insideMap] of map) {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let townWithLowestPrice = '';
        for (let [town, price] of insideMap) {
            if(Number(price) < minPrice) {
                minPrice = price;
                townWithLowestPrice = town;
            }
        }

        console.log(`${mark} -> ${minPrice} (${townWithLowestPrice})`);

    }

}