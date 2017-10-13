/**
 * Created by PC on 19.7.2017 г..
 */
class Player {
    constructor(nickName){
        this.nickName=nickName;
        this.scores=[];
    }

    addScore(score){
       let scoreN=Number(score);
       if(!isNaN(scoreN) && score !== null){
           this.scores.push(scoreN);
       }
       return this;
    }

    get scoreCount(){
        return this.scores.length;
    }

    get highestScore(){
        let sortedScores=this.scores.sort((a,b)=>b-a);
        return sortedScores[0];
    }

    get topFiveScore(){
        let sortedScores=this.scores.sort((a,b)=>b-a);
        if(sortedScores.length<5){
            return sortedScores;
        }
        return sortedScores.slice(0,5);
    }

    toString(){
        let result=`${this.nickName}: [`;

        if(this.scoreCount>0){
            let sortedScores=this.scores.sort((a,b)=>b-a);
            result+=sortedScores.join(',');
        }

        result+=']';

        return result;
    }
}

//let peter = new Player("Peter");
//console.log('Highest score: ' + peter.highestScore);
//console.log(`Top 5 score: [${peter.topFiveScore}]`);
//console.log('' + peter);
//console.log('Score count: ' + peter.scoreCount);
//peter.addScore(450);
//peter.addScore(200);
//console.log('Highest score: ' + peter.highestScore);
//console.log(`Top 5 score: [${peter.topFiveScore}]`);
//console.log('' + peter);
//peter.addScore(2000);
//peter.addScore(300);
//peter.addScore(50);
//peter.addScore(700);
//peter.addScore(700);
//console.log('Highest score: ' + peter.highestScore)
//console.log(`Top 5 score: [${peter.topFiveScore}]`);
//console.log('' + peter);
//console.log('Score count: ' + peter.scoreCount);
//console.log();
//let maria = new Player("Maria")
//    .addScore(350)
//    .addScore(779)
//    .addScore(180);
//console.log('Highest score: ' + maria.highestScore);
//console.log(`Top 5 score: [${maria.topFiveScore}]`);
//console.log('' + maria);

let player = new Player('Misho');

//player.addScore(130);
//player.addScore(240);
//player.addScore(0);
//player.addScore('Pesho');

console.log(player.toString());
console.log(player.highestScore);
console.log(player.scoreCount);
console.log(player.topFiveScore);

player.addScore(555);

console.log(player.toString());
console.log(player.highestScore);
console.log(player.scoreCount);
console.log(player.topFiveScore);