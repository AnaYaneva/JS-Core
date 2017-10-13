/**
 * Created by PC on 5.8.2017 г..
 */
const Promise=require('./promise');


console.log("Before promise");

let p=new Promise(function (resolve, reject) {
    setTimeout(()=>reject("Error"),1000);
});

console.log("After promise");

p.then((data)=>console.log(data))
    //.then()
    .catch((reason)=>console.warn(reason));

console.log("Before promise");

 p=new Promise(function (resolve, reject) {
    setTimeout(()=>resolve("Success"),0);
});

console.log("After promise");

p.then((data)=>console.log(data));