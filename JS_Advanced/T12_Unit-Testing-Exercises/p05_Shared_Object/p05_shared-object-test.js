/**
 * Created by PC on 13.7.2017 г..
 */
let expect=require('chai').expect;
let jsdom=require('jsdom-global')();
let $=require('jquery');

document.body.innerHTML=`<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("Shared-object unit tests",()=>{
    describe('Initial value tests', ()=>{
        it('test name initial value', ()=> {
            expect(sharedObject.name).to.be.null;
        });

        it('test income initial value', ()=> {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe('ChangeName tests', ()=>{
        it('with empty string name should be null', ()=> {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it('with non-empty string name should not be null', ()=> {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'Name did not change correctly');
        });

        describe('name input tests', ()=>{
            it('with empty string name should be null', ()=> {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtVal=$('#name');
                expect(nameTxtVal.val()).to.be.equal('Nakov');
            });

            it('with non-empty string name should not be null', ()=> {
                sharedObject.changeName('Pesho');
                let nameTxtVal=$('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho', 'Name did not change correctly');
            });
        });
    });

    describe('ChangeIncome tests', ()=>{
        it('with a string should stay null',()=>{
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });

        it('with a positive number',()=>{
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });

        it('with a floted-point',()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5);
        });

        it('with a negative number',()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5);
        });

        it('with zero',()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });

        describe('income input tests', ()=>{
            it('with a string should not change correctly',()=>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt=$('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it('with a positive number',()=>{
                sharedObject.changeIncome(5);
                let incomeTxt=$('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it('with a floted-point',()=>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(4.11);
                let incomeTxt=$('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it('with a negative number',()=>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-4);
                let incomeTxt=$('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it('with zero',()=>{
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxt=$('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
        });
    });

    describe('UpdateName tests', ()=>{
        it('with empty string name should not change correctly', ()=> {
            sharedObject.changeName('Viktor');
            let nameEl=$('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor');
        });

        it('with non-empty string name should change correctly', ()=> {
            sharedObject.changeName('Viktor');
            let nameEl=$('#name');
            nameEl.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    });

    describe('UpdateIncome input tests', ()=>{
        it('with a string should not update correctly',()=>{
            sharedObject.changeIncome(3);
            let incomeTxt=$('#income');
            incomeTxt.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it('with a floted-point',()=>{
            sharedObject.changeIncome(3);
            let incomeTxt=$('#income');
            incomeTxt.val('5.11');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it('with a negative number',()=>{
            sharedObject.changeIncome(3);
            let incomeTxt=$('#income');
            incomeTxt.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it('with zero',()=>{
            sharedObject.changeIncome(3);
            let incomeTxt=$('#income');
            incomeTxt.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it('with a positive number',()=>{
            sharedObject.changeIncome(3);
            let incomeTxt=$('#income');
            incomeTxt.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
    });

});