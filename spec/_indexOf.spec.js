const { expect } = require('chai');

const { _indexOf} = require('../src/_indexOf');

describe('low-bar', () => {
    describe('#_indexOf', () => {
        it('is a function', () => {
            expect(_indexOf).to.be.a('function');
        });
         it('should return -1 for invalid inputs', () => {
            expect(_indexOf({a:1,b:2}, 2)).to.equal(-1);
            expect(_indexOf(1234, 2)).to.equal(-1);
        });
        it('should return -1 if value is not present in array or string', () => {
            expect(_indexOf([1,2,3], 4)).to.equal(-1);
             expect(_indexOf('hello', 'x')).to.equal(-1);
        });
        it('should return -1 if passed true for is sorted but value is not present', () => {
            expect(_indexOf([1,2,3], 4, true)).to.equal(-1);
        });
        it('should return index of value passed true for is sorted', () => {
            expect(_indexOf([1,2,3,4,5,6,7,8,9], 4, true)).to.equal(3);

        });
        it('should return the index of the value', () => {
            expect(_indexOf([1,2,3], 2)).to.equal(1);
            expect(_indexOf('hello', 'o')).to.equal(4);
        });
        it('should return the first index if there are multiple', () => {
            expect(_indexOf([1,2,3,4,3], 3)).to.equal(2);
            expect(_indexOf('abcdec', 'c')).to.equal(2);
        });
    });
});