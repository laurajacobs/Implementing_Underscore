const { expect } = require('chai');

const { _last} = require('../src/_last');

describe('low-bar', () => {
    describe('#_last', () => {
        it('is a function', () => {
            expect(_last).to.be.a('function');
        });
        it('should return undefined for invalid inputs', () => {
            expect(_last({a:1,b:2})).to.be.equal(undefined);
            expect(_last(1234)).to.be.equal(undefined);
            expect(_last(true)).to.be.equal(undefined);
        });
        it('should return the first element in the array if not passed an optional argument', () => {
            expect(_last([1,2,3])).to.be.equal(3);
            expect(_last(['foo','bar','baz'])).to.be.equal('baz');
            expect(_last('hello')).to.be.equal('o');
        });
        it('should return the whole array if the optional argument is more than the arrays length', () => {
            expect(_last([1,2,3,4,5,6],10)).to.be.eql([1,2,3,4,5,6]);
            expect(_last('hello',10)).to.be.eql(['h','e','l','l','o']);
        });
        it('should return the first number of elements in an array if passed an second argument', () => {
            expect(_last([1,2,3,4,5,6],3)).to.be.eql([4,5,6]);
            expect(_last(['foo','bar','baz','cat','dog','foobar'], 2)).to.be.eql(['dog','foobar']);
            expect(_last('hello', 3)).to.be.eql(['l','l','o']);
        });
    });
});