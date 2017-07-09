const { expect } = require('chai');

const { _each} = require('../src/_each');

describe('low-bar', () => {
    describe('#_each', () => {
        it('is a function', () => {
            expect(_each).to.be.a('function');
        });
        it('should bind the iteratee to a context object if one is passed', () =>  {
            const context = {'two': 2};
            const result = [];
            function iteratee (elem, i, list) {
                result.push(context.two)
            }
            _each([1,2,3], iteratee, context);
            expect(result).to.eql([2,2,2]);
        });
    });
});