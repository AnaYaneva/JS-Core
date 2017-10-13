/**
 * Created by PC on 12.7.2017 г..
 */

let expect=require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", ()=>{
    it("not string first param should return 'undefined'", ()=>{
        expect(lookupChar(10,1)).to.be.equal(undefined);
    });

    it("not number second param should return 'undefined'", ()=>{
        expect(lookupChar("10","1")).to.be.equal(undefined);
    });

    it("with floating number second param should return 'undefined'", ()=>{
        expect(lookupChar("10",1.1)).to.be.equal(undefined);
    });

    it("with incorrect index should return 'Incorrect index'", ()=>{
        expect(lookupChar("10",2)).to.be.equal('Incorrect index');
    });

    it("with negative index should return 'Incorrect index'", ()=>{
        expect(lookupChar("10",-1)).to.be.equal('Incorrect index');
    });

    it("with correct params should return correct value", ()=>{
        expect(lookupChar("10",1)).to.be.equal('0');
    });
});