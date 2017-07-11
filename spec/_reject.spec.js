const { expect } = require('chai');

const { _reject } = require('../src/_reject');

describe('low-bar', () => {
    describe('#_reject', () => {
        it('is a function', () => {
            expect(_reject).to.be.a('function');
        });
        it('it should return an empty array if passed a number', () => {
            const testfunc = (num) => { return num > 1 };
            expect(_reject(123, testfunc)).to.eql([]);
        });
        it('it should return an array of values that do not pass a truth test/predicate', () => {
            const testfunc = (num) => { return num % 2 === 0 };
            expect(_reject([1, 2, 3], testfunc)).to.eql([1, 3]);
            const testfunc2 = (letter) => { return letter === 'h' };
            expect(_reject('hello', testfunc2)).to.eql(['e','l','l','o']);
        });
        it('it should return only that values that do not pass truth test/predicate when passed an object', () => {
            const testfunc = (num) => { return num % 2 !== 0 };
            expect(_reject({ a: 1, b: 2, c: 3 }, testfunc)).to.eql([2]);
        });
        // it('it should correctly bind context if passed', () => {
        //     const testfunc3 = (num) => { return num > 2 };
        //     const context = { 'one': 1 };
        //     expect(_reject([1, 2, 3], testfunc3, context)).to.eql([1,1]);
        // });
    });
});