/**
 * Created by PC on 23.5.2017 г..
 */
function sumAndVat(input){
   let sum=0;
   for(let num of input){
       sum+=num;
   }
   console.log("sum = "+sum);
    console.log("VAT = "+sum*0.2);
    console.log("total = "+sum*1.2);
}