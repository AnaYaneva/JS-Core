/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
    let output = [];
    let regex = /([0-9]+)/g;

    console.log(input.join(' ').match(regex).join(' '));
}

solve(['The300',
'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);