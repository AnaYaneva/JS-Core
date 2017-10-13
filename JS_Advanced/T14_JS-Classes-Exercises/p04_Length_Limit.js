/**
 * Created by PC on 17.7.2017 г..
 */
class Stringer{
    constructor(innerString ,innerLength){
        this.innerString = innerString;
        this.initialLength = innerLength;
        this.innerLength = innerLength
    }

    get innerLength(){
        return this._innerLength
    }

    set innerLength(value) {
        if (value < 0)
            this._innerLength = 0;
        else
            this._innerLength = value
    }

    increase(value){
        this._innerLength += value;
    }

    decrease(value){
        this._innerLength -= value;
        if (this._innerLength < 0)
            this._innerLength = 0;
    }

    toString(){
        if(this.innerLength==0) {
            return '...';
        }else if(this.innerLength>=this.innerString.length){
            return this.innerString;
        }
        return this.innerString.substr(0,this.innerLength)+"...";


    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...
