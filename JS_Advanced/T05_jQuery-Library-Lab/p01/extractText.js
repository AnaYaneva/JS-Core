function extractText() {
   let output=[];
   $('#items li').each((i,e)=>output.push(e.textContent));
    $('#result').text(output.join(', '));
}
