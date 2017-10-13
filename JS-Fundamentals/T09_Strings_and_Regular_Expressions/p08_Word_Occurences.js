/**
 * Created by PC on 7.6.2017 г..
 */
function findOcc(text, substring) {
    let regex = new RegExp("\\b"+substring + "\\b", "gi");
    if (text.match(regex) == null) {
        return 0;
    }
    console.log(text.match(regex).length);
}
findOcc(['The waterfall was so high, that the child couldn’t see its peak.',
    'the']);