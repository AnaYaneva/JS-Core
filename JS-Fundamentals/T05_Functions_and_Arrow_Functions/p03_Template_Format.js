/**
 * Created by PC on 2.6.2017 г..
 */
function format(input){
    "use strict";
    let template = '<?xml version="1.0" encoding="UTF-8"?>\n' + '<quiz>\n';
    for (let i = 0 ; i<input.length; i = i+2) {
        template += '  <question>\n';
        template += '    ' + input[i] + '\n' ;
        template += '  </question>\n';
        template += '  <answer>\n';
        template += '    ' + input[i+1] + '\n' ;
        template += '  </answer>\n'
    }
    template += '</quiz>';
    console.log(template);
}

format(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);