/**
 * Created by PC on 13.7.2017 г..
 */

let expect=require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer tests", ()=>{
    describe("addFive tests", ()=>{
       it("with non-number parameter, should return 'undefined'", ()=>{
           expect(mathEnforcer.addFive('p')).to.be.equal(undefined);
       });

        it("with floating-point number parameter, should return correct value", ()=>{
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });

        it("with negative number parameter, should return correct value", ()=>{
            expect(mathEnforcer.addFive(-8)).to.be.equal(-3);
        });

        it("with positive number parameter, should return correct value", ()=>{
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
    });

    describe("subtractTen tests", ()=>{
        it("with non-number parameter, should return 'undefined'", ()=>{
            expect(mathEnforcer.subtractTen('p')).to.be.equal(undefined);
        });

        it("with floating-point number parameter, should return correct value", ()=>{
            expect(mathEnforcer.subtractTen(13.14)).to.be.closeTo(3.14, 0.01);
        });

        it("with negative number parameter, should return correct value", ()=>{
            expect(mathEnforcer.subtractTen(-8)).to.be.equal(-18);
        });

        it("with positive number parameter, should return correct value", ()=>{
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });
    });

    describe("sum tests", ()=>{
        it("with non-number first parameter, should return 'undefined'", ()=>{
            expect(mathEnforcer.sum('p',2)).to.be.equal(undefined);
        });

        it("with non-number second parameter, should return 'undefined'", ()=>{
            expect(mathEnforcer.sum(2,'p')).to.be.equal(undefined);
        });

        it("with floating-point number parameters, should return correct value", ()=>{
            expect(mathEnforcer.sum(13.14,0.02)).to.be.closeTo(13.16, 0.01);
        });

        it("with negative number parameters, should return correct value", ()=>{
            expect(mathEnforcer.sum(-8,-5)).to.be.equal(-13);
        });

        it("with positive number parameters, should return correct value", ()=>{
            expect(mathEnforcer.sum(15,1)).to.be.equal(16);
        });

        it("with positive and negative number parameters, should return correct value", ()=>{
            expect(mathEnforcer.sum(15,-1)).to.be.equal(14);
        });

        it("with 0 number parameters, should return correct value", ()=>{
            expect(mathEnforcer.sum(0,0)).to.be.equal(0);
        });
    });
});
