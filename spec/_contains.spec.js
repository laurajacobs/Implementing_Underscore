const { expect } = require('chai');

const { _contains } = require('../src/_contains');

describe('low-bar', () => {
    describe('#_contains', () => {
        it('is a function', () => {
            expect(_contains).to.be.a('function');
        });
        it('is should return false for invalid inputs', () => {
            expect(_contains(1234, 4)).to.be.false;
        });
        it('is should return false if list does not contain value', () => {
            expect(_contains([1, 2, 3], 4)).to.be.false;
            expect(_contains('hello', 'x')).to.be.false;
            expect(_contains({ a: 1, b: 2, c: 3 }, 7)).to.be.false;
        });
        it('is should return true if list contains value', () => {
            expect(_contains([1, 2, 3], 3)).to.be.true;
            expect(_contains('hello', 'e')).to.be.true;
            expect(_contains({ a: 1, b: 2, c: 3 }, 2)).to.be.true;
        });
        it('is should start looking from particular index only if passed', () => {
            expect(_contains([1, 2, 3, 4, 5, 6], 2, 4)).to.be.false;
            expect(_contains([1, 2, 3, 4, 5, 6], 2, 1)).to.be.true;
            expect(_contains('hello', 'e', 3)).to.be.false;
            expect(_contains('hello', 'e', 1)).to.be.true;
        });

    });
});