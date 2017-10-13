function solve(input) {
    let text=input[0];

    text=text.replace(/\s*([.,!?:;])\s*/g,(match,gr1)=>gr1+" ")
        .replace(/\.\s*\.\s*\.\s*!/g,'...!')
        .replace(/(\.)\s*([0-9]+)/g,(match,gr1,gr2)=>gr1+gr2)
        .replace(/"([^"]+)"/g,(match,gr1)=>"\""+gr1.trim()+"\"");

    console.log(text);
}