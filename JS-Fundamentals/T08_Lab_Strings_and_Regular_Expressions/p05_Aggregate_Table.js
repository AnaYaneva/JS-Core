/**
 * Created by PC on 7.6.2017 г..
 */
function aggregateTable(lines) {
    let sum = 0, list = [];
    for (let line of lines) {
        let townData = line.split('|'),
            townName = townData[1].trim(),
            income = Number(townData[2].trim());
        list.push(townName);
        sum += income;
    }
    console.log(list.join(', ') + '\n' + sum);
}
