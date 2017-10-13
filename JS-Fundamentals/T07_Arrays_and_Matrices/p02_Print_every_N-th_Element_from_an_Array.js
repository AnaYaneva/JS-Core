/**
 * Created by PC on 4.6.2017 г..
 */
function element(input) {
    let step=input.pop();

    let arr = input.filter((x,i)=> i % step == 0)
        .forEach(e=>console.log(e));
}