/**
 * Created by PC on 7.6.2017 г..
 */
function matchAllWords(text) {
    if (Array.isArray(text)) text = text[0];
    let words = text.match(/\w+/g);
    return words.join('|');
}
