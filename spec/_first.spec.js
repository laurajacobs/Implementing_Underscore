const { expect } = require('chai');

const { _first} = require('../src/_first');

describe('low-bar', () => {
    describe('#_first', () => {
        it('is a function', () => {
            expect(_first).to.be.a('function');
        });
        it('should return undefined for invalid inputs', () => {
            expect(_first({a:1,b:2})).to.be.equal(undefined);
            expect(_first(1234)).to.be.equal(undefined);
            expect(_first(true)).to.be.equal(undefined);
        });
        it('should return the first element in the array if not passed an optional argument', () => {
            expect(_first([1,2,3])).to.be.equal(1);
            expect(_first(['foo','bar','baz'])).to.be.equal('foo');
            expect(_first('hello')).to.be.equal('h');
        });
        it('should return the whole array if the optional argument is more than the arrays length', () => {
            expect(_first([1,2,3,4,5,6],10)).to.be.eql([1,2,3,4,5,6]);
        });
        it('should return the first number of elements in an array if passed an second argument', () => {
            expect(_first([1,2,3,4,5,6],3)).to.be.eql([1,2,3]);
            expect(_first(['foo','bar','baz','cat','dog','foobar'], 5)).to.be.eql(['foo','bar','baz','cat','dog']);
            expect(_first('hello', 3)).to.be.eql(['h','e','l']);
        });
    });
});