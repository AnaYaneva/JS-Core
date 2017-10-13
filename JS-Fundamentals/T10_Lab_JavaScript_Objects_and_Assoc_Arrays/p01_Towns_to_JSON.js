/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
    input.shift();
    let output=[];
    for (let row of input) {
        row=row.split('|').filter(e=>e!=='')
            .map(e=>e.trim());
        let obj={Town:row[0],
            Latitude:Number(row[1]),
            Longitude:Number(row[2])
        };
        output.push(obj);
    }
    console.log(JSON.stringify(output));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);