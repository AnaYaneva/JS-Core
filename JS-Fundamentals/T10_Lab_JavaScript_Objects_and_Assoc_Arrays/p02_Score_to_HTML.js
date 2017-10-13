/**
 * Created by PC on 7.6.2017 г..
 */
function shoreToHTML(input) {


    let html = "<table>\n   <tr><th>name</th><th>score</th></tr>\n";
    let arr = JSON.parse(input);

    for (let info of arr) {

        html += `   <tr><td>${htmlEsca(info.name)}</td><td>${info.score}</td></tr>\n`;

    }
    html += '</table>';
    console.log(html);

    function htmlEsca(text) {

        let arrHtml = {'&' : '&amp;',  '<':'&lt;', '>':'&gt;', '"':'&quot;', "'": '&#39;'};
        return text.replace(/[&<>\"\']/g, ch => arrHtml[ch]);
    }
}