const { expect } = require('chai');

const { _Identity} = require('../src/_Identity');

describe('low-bar', () => {
    describe('#_Identity', () => {
        it('is a function', () => {
            expect(_Identity).to.be.a('function');
        });
        it('should return the data it was passed in unchanged', () => {
            expect(_Identity('hello')).to.be.equal('hello');
            expect(_Identity([1,2,3])).to.be.eql([1,2,3]);
            expect(_Identity({name: 'laura'})).to.be.eql({name:'laura'});
            const add = function (a,b) { return a + b;};
            expect(_Identity(add)).to.be.equal(add);
        });
    });
});

