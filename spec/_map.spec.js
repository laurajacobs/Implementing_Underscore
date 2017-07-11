const { expect } = require('chai');

const { _map } = require('../src/_map');

describe('low-bar', () => {
    describe('#_map', () => {
        it('is a function', () => {
            expect(_map).to.be.a('function');
        });
        it('it should return the array if not iteratee is passed', () => {
            expect(_map([1,2,3,4,5])).to.eql([1,2,3,4,5]);
        });
        it('it should return an empty array is passed a number', () => {
            expect(_map(1234, (num) => {return num * 2})).to.eql([]);
        });
        it('it should correctly iterate over an array and apply transformation', () => {
            const double = (num) => {return num * 2}
            expect(_map([1,2,3], double)).to.eql([2,4,6]);
        });
         it('it should correctly iterate over a string and apply transformation', () => {
            const stringFunc = (letter) => {return letter + 'X'}
            expect(_map('abc', stringFunc)).to.eql(['aX','bX','cX']);
        });
        it('it should correctly iterate over an object and apply transformation', () => {
            const double = (num) => {return num * 2}
            expect(_map({a:1,b:2,c:3}, double)).to.eql([2,4,6]);
        });
        xit('it should bind context to iteratee if passed', () => {
            const context = 1;
            const double = (num) => {return num * 2}
            expect(_map([1,2,3], double, context)).to.eql([2,2,2]);
        });
    });
});