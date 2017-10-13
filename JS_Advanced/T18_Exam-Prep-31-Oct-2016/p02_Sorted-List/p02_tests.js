/**
 * Created by PC on 18.7.2017 г..
 */
let expect=require('chai').expect;
let SortedList=require('./p2_Sorted-List');

describe('Sorted List Unit Tests', function () {
   let myList;
    beforeEach(function () {
        myList=new SortedList();
    });

    describe('Test initial state', function () {
        it('add exists', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        });

        it('remove exists', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        });

        it('get exists', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        });

        it('size exists', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });
    });

    describe('Test add', function () {
        it('with one element', function () {
            myList.add(5);
            expect(myList.list.join(', ')).to.equal('5');
        });

        it('with many elements', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(myList.list.join(', ')).to.equal('1, 3, 5');
        });
    });

    describe('Test remove', function () {
        it('with empty list', function () {
            expect(() => myList.remove()).throw(Error, "Collection is empty.");
        });

        it('with negative index', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(() => myList.remove(-1)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it('with index out of bounds', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(() => myList.remove(4)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it('with index equal to list length', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(() => myList.remove(3)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it('with correct', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            myList.remove(1);
            expect(myList.list.join(', ')).to.equal('1, 5');
        });
    });

    describe('Test get', function () {
        it('with empty list', function () {
            expect(() => myList.get()).throw(Error, "Collection is empty.");
        });

        it('with negative index', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(() => myList.get(-1)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it('with index out of bounds', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(() => myList.get(4)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it('with index equal to list length', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(() => myList.get(3)).throw(Error, "Index was outside the bounds of the collection.");
        });

        it('with correct', function () {
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(myList.get(1)).to.equal(3);
        });
    });

    describe('Test size', function () {
        it('with empty list', function (){
           expect(myList.size).to.equal(0);
        });

        it('with non-empty list', function (){
            myList.add(5);
            myList.add(3);
            myList.add(1);
            expect(myList.size).to.equal(3);
        });
    });
});