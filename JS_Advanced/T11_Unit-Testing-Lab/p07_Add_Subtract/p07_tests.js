/**
 * Created by PC on 12.7.2017 г..
 */
let createCalculator=require(`./p07_calculator.js`).createCalculator;
let expect=require("chai").expect;

describe("Calculator", ()=>{
    let calc;

    beforeEach(()=>{
        calc=createCalculator();
    });

    it("should return an object", ()=>{
        expect(typeof calc).to.equal('object');
    });

    it("should have 0 value when created", ()=>{
        expect(calc.get()).to.equal(0);
    });

    it("should add", ()=>{
        calc.add(2);
        calc.add(3);
        expect(calc.get()).to.equal(5);
    });

    it("should subtract", ()=>{
        calc.subtract(3);
        calc.subtract(2);
        expect(calc.get()).to.equal(-5);
    });

    it("should work with fractions", ()=>{
        calc.add(5.3);
        calc.subtract(1.1);
        expect(calc.get()).to.be.closeTo(4.2, 0.001);
    });

    it("should add/subtract", ()=>{
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        expect(calc.get()).to.equal(2);
    });

    it("should add NaN", ()=>{
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });

    it("should subtract NaN", ()=>{
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN;
    });
});