/**
 * Created by PC on 7.6.2017 г..
 */
function solve(input) {
    let output=new Set();
    input.join('\n').split(/\W+/g)
        .filter(e=>e!=='')
        .map(e=>e.toLowerCase())
        .map(e=>output.add(e));

    console.log([...output].join(', '));

}

solve([
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);