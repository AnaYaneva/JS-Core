/**
 * Created by PC on 17.6.2017 г..
 */
function queryMess(queryStings) {

    for (let queryString of queryStings) {
        let fieldMap = new Map();
        queryString = queryString.replace(/\+|%20/g, ' ').replace(/\s+/g, ' ').trim();
        let pairs = queryString.split(/&|\?/);

        for (let pair of pairs) {
            let pairTokens = pair.split('=').map(e => e.trim());
            if (pairTokens.length === 1) {
                continue;
            }

            let field = pairTokens[0];
            let value = pairTokens[1];

            if (!fieldMap.has(field)) {
                fieldMap.set(field, []);
            }

            fieldMap.get(field).push(value);
        }

        let output = '';
        for (let [field, value] of fieldMap.entries()) {
            output += `${field}=[${value.join(', ')}]`;
        }

        console.log(output);
    }
}

queryMess(['login=student&password=student']);


function mess(input) {
    // just in case
    input = input.filter(x => x !== '');

    while (input.length > 0) {
        // split over & for field-value pair
        let data = input.shift().split(/&/).filter(x => x !== '');
        let result = new Map();

        for (let entry of data) {

            // field-value pair regex
            let regex = /^(.*?)\??([!-%'->@-~]+)=([!-%'->@-~]+)\??$/;

            // obtain field-value pair with whitespaces
            let match = entry.match(regex);

            // whitespace clear regex
            let clearRegex = /(%20|\+)+/g;

            // clear field-value pair from whitespaces
            let clearField = match[2].replace(clearRegex, (match, $1) => ' ').trim();
            let clearValue = match[3].replace(clearRegex, (match, $1) => ' ').trim();

            // maps the field-value pairs
            if (!result.has(clearField)) {
                result.set(clearField, [])
            }
            result.get(clearField).push(clearValue);
        }


        // print as requested format
        let formattedResult = '';
        for (let [k, v] of result) {
            formattedResult += `${k}=[${v.join(', ')}]`
        }
        console.log(formattedResult);


    }
}
