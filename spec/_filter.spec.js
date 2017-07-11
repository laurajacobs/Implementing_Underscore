const { expect } = require('chai');

const { _filter } = require('../src/_filter');

describe('low-bar', () => {
    describe('#_filter', () => {
        it('is a function', () => {
            expect(_filter).to.be.a('function');
        });
        it('it should return an empty array if passed a number', () => {
            const testfunc = (num) => { return num > 1 };
            expect(_filter(123, testfunc)).to.eql([]);
        });
        it('it should return an array of only that values that pass truth test/predicate', () => {
            const testfunc = (num) => { return num > 1 };
            expect(_filter([1, 2, 3], testfunc)).to.eql([2, 3]);
            const testfunc2 = (letter) => { return letter === 'h' };
            expect(_filter('hello', testfunc2)).to.eql(['h']);
        });
        it('it should return only that values that pass truth test/predicate if passed an object', () => {
            const testfunc = (num) => { return num % 2 !== 0 };
            expect(_filter({ a: 1, b: 2, c: 3 }, testfunc)).to.eql([1, 3]);
        });
        // it('it should correctly bind context if passed', () => {
        //     const testfunc3 = (num) => { return num > 0 };
        //     const context = { 'one': 1 };
        //     expect(_filter([1, 2, 3], testfunc3, context)).to.eql([1, 1, 1]);
        // });
    });
});