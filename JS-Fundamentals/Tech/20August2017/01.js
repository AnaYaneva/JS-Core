/**
 * Created by PC on 29.8.2017 г..
 */
function solve(n,input){
    n=Number(n);

    let theoretical=0;
    let practical=0;
    let technical=0;

    for (let i = 0; i < input.length; i+=3) {
        let distance = Number(input[i]) * 1600;
        let cargo = Number(input[i + 1]) * 1000;
        let team = input[i + 2];

        let participantEarnedMoney = (cargo * 1.5) - (0.7 * distance * 2.5);

        switch (team) {
            case "Theoretical":
                theoretical += participantEarnedMoney;
                break;
            case "Practical":
                theoretical += participantEarnedMoney;
                break;
            case "Technical":
                theoretical += participantEarnedMoney;
                break;
        }
    }
      let max=Math.max(theoretical,practical,technical);

      if(max===theoretical){
            console.log(`The Theoretical Trainers win with ${theoretical.toFixed(3)}.`);
        }else if(max===practical){
          console.log(`The Practical Trainers win with ${practical.toFixed(3)}.`);
      }else if(max===technical){
          console.log(`The Technical Trainers win with ${technical.toFixed(3)}.`);
      }
}