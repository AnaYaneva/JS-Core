/**
 * Created by PC on 19.7.2017 г..
 */
let makeList=require('./list-add-left-right-clear');
let expect=require('chai').expect;

describe("makeList unit tests", function() {
    let myList = {};
    beforeEach(function (){
        myList = makeList();
    });

    it("contains functions test", function() {
        expect(myList.toString()).to.equal("");
    });

    it("initial state test", function() {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });

    it("add left test", function() {
        myList.addLeft(1);
        myList.addLeft(2);
        myList.addLeft(3);
        expect(myList.toString()).to.equal("3, 2, 1");
    });

    it("add right test", function() {
        myList.addRight(3);
        myList.addRight(2);
        myList.addRight(1);
        expect(myList.toString()).to.equal("3, 2, 1");
    });

    it("clear test", function() {
        myList.addRight(3);
        myList.addRight(2);
        myList.addRight(1);
        myList.clear();
        expect(myList.toString()).to.equal("");
    });

    it("toString test", function() {
        myList.addRight(3);
        myList.addRight(2);
        myList.addRight(1);
        expect(myList.toString()).to.equal("3, 2, 1");
    });
});
