/**
 * Created by PC on 12.7.2017 г..
 */

let expect=require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", ()=> {
    it('when input is number should return undefined', ()=>{
        expect(isOddOrEven(5)).to.equal(undefined, "Function not return the correct result!");
    });

    it('when input is object should return undefined',()=>{
        expect(isOddOrEven({name:"pesho"})).to.equal(undefined, "Function not return the correct result!");
    });

    it('when input is string with even length should return "even"',()=>{
        expect(isOddOrEven("abcd")).to.equal("even");
    });

    it('when input is string with odd length should return "odd"',()=>{
        expect(isOddOrEven("abc")).to.equal("odd");
    });
});