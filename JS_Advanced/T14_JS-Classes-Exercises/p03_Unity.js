/**
 * Created by PC on 17.7.2017 г..
 */
class Rat {
    //let ratsList;

    constructor(name) {
        this.name = name;
        this.ratsList = [];
    }

    unite(otherRat) {
        if(otherRat instanceof  Rat){
        this.ratsList.push(otherRat);
        }
    }
    getRats(){
      return this.ratsList;
}
    toString(){
        let str='';
        str+=`${this.name}\n`;
        for (let rat of this.ratsList) {
            str+=`##${rat.name}\n`;
        }
        return str;

    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
