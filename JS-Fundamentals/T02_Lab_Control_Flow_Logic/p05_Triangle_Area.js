/**
 * Created by PC on 28.5.2017 г..
 */
function triangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    let area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    return area;
}
