const { expect } = require('chai');

const { _pluck } = require('../src/_pluck');

describe('low-bar', () => {
    describe('#_pluck', () => {
        it('is a function', () => {
            expect(_pluck).to.be.a('function');
        });
        it('is should take two parameters', () => {
            expect(_pluck.length).to.equal(2);
        });
        it('is should return an empty array if passed a number', () => {
            expect(_pluck(123, 2)).to.eql([]);
        });
        it('is should return an array of undefined the same length as list if passed a string', () => {
            expect(_pluck('hello', 'l')).to.eql([undefined, undefined, undefined, undefined, undefined]);
        });
        it('is should return an array of values that match the propertyName if passed an array', () => {
            const testList = [{ name: 'harry', age: 26 }, { name: 'ben', age: 30 }]
            expect(_pluck(testList, 'name')).to.eql(['harry', 'ben']);
        });
        it('is should return an array of values that match the propertyName if passed an object', () => {
            const testList = {
                a: {
                    name: 'harry',
                    age: 26
                },
                b : {
                    name: 'ben',
                    age: 30
                }
            };

            expect(_pluck(testList, 'age')).to.eql([26, 30]);
        });
    });
});