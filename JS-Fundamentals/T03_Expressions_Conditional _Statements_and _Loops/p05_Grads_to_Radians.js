/**
 * Created by PC on 30.5.2017 г..
 */
function gradsToDegree(grads) {
    let degree = 0.9 * Number(grads);
    if (Number(grads) <= 0) {
        degree = 360 + (degree % 360);
    }
    return degree;
}