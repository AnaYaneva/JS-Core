/**
 * Created by PC on 19.7.2017 г..
 */
function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let expect=require('chai').expect;

describe('tests',function () {
    let lis={};
    beforeEach(function () {
        lis=createList();
    });

    it('function exists', function () {
       expect(lis.add).to.exist;
        expect(lis.shiftLeft).to.exist;
        expect(lis.shiftRight).to.exist;
        expect(lis.swap).to.exist;
        expect(lis.toString).to.exist;
    });

    it('initial test',function () {
       expect(lis.toString()).to.equal("");
    });
    describe('add tests',function () {
        it('add one test', function () {
            lis.add(1);
            expect(lis.toString()).to.equal("1");
        });

        it('add more test', function () {
            lis.add(1);
            lis.add('one');
            lis.add(true);
            expect(lis.toString()).to.equal("1, one, true");
        });
    });

    describe('shiftLeft tests',function () {
        it('shiftLeft one test', function () {
            lis.add(1);
            lis.shiftLeft();
            expect(lis.toString()).to.equal("1");
        });

        it('shiftLeft more test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            lis.shiftLeft();
            expect(lis.toString()).to.equal("2, 3, 1");
        });

        it('shiftLeft more times test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            lis.shiftLeft();
            lis.shiftLeft();
            expect(lis.toString()).to.equal("3, 1, 2");
        });
    });

    describe('shiftRight tests',function () {
        it('shiftRight one test', function () {
            lis.add(1);
            lis.shiftRight();
            expect(lis.toString()).to.equal("1");
        });

        it('shiftRight more test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            lis.shiftRight();
            expect(lis.toString()).to.equal("3, 1, 2");
        });

        it('shiftRight more times test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            lis.shiftRight();
            lis.shiftRight();
            expect(lis.toString()).to.equal("2, 3, 1");
        });
    });

    describe('swap tests',function () {
        it('swap negative indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(-2,-3)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap negative indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(-2,0)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap negative indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(2,-1)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap bigger indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(4,6)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });


        it('swap bigger indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(0,6)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap bigger indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(4,1)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap non-integer indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap('one','zero')).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap non-integer indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(1,'zero')).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap non-integer indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap('zero',2)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap non-integer indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(2,2)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap non-integer indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(3,2)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap non-integer indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(2,3)).to.equal(false);
            expect(lis.toString()).to.equal("1, 2, 3");
        });

        it('swap correct indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(0,2)).to.equal(true);
            expect(lis.toString()).to.equal("3, 2, 1");
        });

        it('swap correct indexes test', function () {
            lis.add(1);
            lis.add(2);
            lis.add(3);
            expect(lis.swap(2,0)).to.equal(true);
            expect(lis.toString()).to.equal("3, 2, 1");
        });
    });
});
