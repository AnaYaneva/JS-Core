
function solve(input){
    let arr=[];
    for (let i = 0; i < input.length; i++) {
        let obj = input[i];
        if(obj=="+"||obj=="-"||
            obj=="*"||obj=="/"){
            if(arr.length>=2){
              let firstOpp=arr.pop();
              let secondOpp=arr.pop();

              switch(obj){
                  case "+":
                      arr.push(firstOpp+secondOpp);
                      break;
                  case "-":
                      arr.push(-firstOpp+secondOpp);
                      break;
                  case "*":
                      arr.push(firstOpp*secondOpp);
                      break;
                  case "/":
                      arr.push(secondOpp/firstOpp);
                      break;
              }
            }else{
                console.log("Error: not enough operands!");
                return;
            }
        }else{
            arr.push(Number(obj));
        }
    }

    if(arr.length>1){
        console.log("Error: too many operands!");
    }else {
        console.log(arr.pop());
    }
}

solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);
