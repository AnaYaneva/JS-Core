/**
 * Created by PC on 7.6.2017 г..
 */
function countWords(input) {
    let arr = input.join(' ').split(/[\W]+/g).filter(e => e !== '');
    let counterWithWords = {};
    for (let i = 0; i<arr.length; i++) {
        if (!counterWithWords[arr[i]]) {
            counterWithWords[arr[i]] = 1;
        } else {
            counterWithWords[arr[i]]++;
        }
    }
    console.log(JSON.stringify(counterWithWords));
}
