/**
 * Created by PC on 2.6.2017 г..
 */
function cook(input) {
    let number=Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        number=dosth(number, input[i]);
        console.log(number);
    }

      function dosth(number,command) {
          switch (command) {
              case 'chop' :
                  return number /= 2;
              case 'dice' :
                  return number = Math.sqrt(number);
              case 'spice' :
                  return ++number;
              case 'bake' :
                  return number *= 3;
              case 'fillet' :
                  return numbar = number - (number * 0.2);
          }
      }
}

cook([32, chop, chop, chop, chop, chop]);