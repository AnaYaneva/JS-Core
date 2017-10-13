/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
    let regex=/\b(_)([A-Za-z0-9]+)\b/g;
    let output=[];
    let match=regex.exec(input);
    while(match){
        output.push(match[2]);
        match=regex.exec(input);
    }
    console.log(output.join(','));
}

solve('The _id and _age variables are both integers.');