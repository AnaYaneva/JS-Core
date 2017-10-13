function solve(input) {
    let max = -Infinity;
    while (input.length > 0) {
        let count = Number(input.shift());
        if (count >= 10 || count < 0) continue;
        let product = 1;
        for (let i = 0; i < count; i++) {
            product *= Number(input[i]);
        }
        if (product > max) {
            max = product;
        }
    }

    console.log(max);
}