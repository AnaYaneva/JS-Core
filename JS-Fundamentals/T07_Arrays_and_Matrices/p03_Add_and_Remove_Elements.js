/**
 * Created by PC on 4.6.2017 г..
 */
function elements(input){
    let counter=1;
    let output=[];

    for (let i = 0; i < input.length; i++) {
        switch(input[i]){
            case "add":
                output.push(counter);
                break;
            case "remove":
                if(input.length!=0){
                    output.pop();
                    break;
                }
        }
        counter++;
    }

    if(output.length==0){
        console.log("Empty");
    }else{
        for (let i = 0; i < output.length; i++) {
            console.log(output[i]);
        }
    }
}

elements(['add','add','remove','add','add']);