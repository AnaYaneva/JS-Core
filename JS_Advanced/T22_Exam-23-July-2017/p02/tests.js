/**
 * Created by PC on 23.7.2017 г..
 */
let expect=require('chai').expect;
let Sumator=require('./02');

describe('Sumator Unit Tests', function () {
    let sumator;
    beforeEach(function () {
        sumator=new Sumator();
    });

    describe('Test initial state', function () {
        it('add exists', function () {
            expect(sumator.data.toString()).to.equal("");
        });

        it('remove exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        });

        it('get exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        });

        it('size exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });

        it('size exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });

    describe('toString tests', function () {
        it('with zero element', function () {
            expect(sumator.toString()).to.equal('(empty)');
        });
    });

    describe('Test add', function () {
        it('with one element', function () {
            sumator.add(5);
            expect(sumator.data.toString()).to.equal('5');
        });

        it('with many elements', function () {
            sumator.add(5);
            sumator.add("ppp");
            sumator.add(true);
            expect(sumator.data.toString()).to.equal('5,ppp,true');
        });
    });

    describe('sumNums tests', function () {
        it('with zero element', function () {
            expect(sumator.sumNums()).to.equal(0);
        });

        it('with many elements', function () {
            sumator.add(5);
            sumator.add("ppp");
            sumator.add(true);
            expect(sumator.sumNums()).to.equal(5);
        });

        it('with many elements', function () {
            sumator.add("ppp");
            sumator.add(true);
            expect(sumator.sumNums()).to.equal(0);
        });

        it('with many elements', function () {
            sumator.add(5);
            sumator.add("ppp");
            sumator.add(3.3);
            expect(sumator.sumNums()).to.equal(8.3);
        });
    });

    describe('removeByFilter tests', function () {
        it('with zero element', function () {
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.data.toString()).to.equal('');
        });

        it('with zero element', function () {
            sumator.add("ppp");
            sumator.add(true);
            sumator.add(7);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.data.toString()).to.equal('ppp,true,7');
        });

        it('with zero element', function () {
            sumator.add(4);
            sumator.add(6);
            sumator.add(8);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.data.toString()).to.equal('');
        });

        it('with many elements', function () {
            sumator.add(6);
            sumator.add("ppp");
            sumator.add(true);
            sumator.add(7);
            sumator.add(8);
            sumator.removeByFilter(x => x % 2 === 0);
            expect(sumator.toString()).to.equal('ppp, true, 7');
        });

    });

});