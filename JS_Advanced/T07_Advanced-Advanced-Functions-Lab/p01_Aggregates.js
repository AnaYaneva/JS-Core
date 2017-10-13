/**
 * Created by PC on 4.7.2017 г..
 */
function aggregate(arr){
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
        return result;
    }

    console.log('Sum = '+reduce(arr, (a, b) => a + b));
    console.log('Min = '+reduce(arr, (a, b) => a>b?a:b));
    console.log('Max = '+reduce(arr, (a, b) => a<b?a:b));
    console.log('Product = '+reduce(arr, (a, b) => a * b));
    console.log('Join = '+reduce(arr, (a, b) => ""+a + b));
}