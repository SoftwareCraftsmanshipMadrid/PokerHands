var expect = require('chai').expect;
var Card = require('../src/card');
var pokerHandTypeChecker = require('../src/pockerHandTypeChecker');
var HandType = require('../src/HandTypes');

describe('Poker Hand Type Checker', () => {
    describe('given a highcard hand ', () => {
        it('should return this type of hand as result', () => {
            var hand = [
                new Card('2', "H"),
                new Card('3', "D"),
                new Card('5', "S"),
                new Card('9', "C"),
                new Card('K', "D")
            ];

            expect(pokerHandTypeChecker.check(hand)).to.be.equal(HandType.HIGHCARD);
        });
    });

    describe('given a flush hand ', () => {
        it('should return flush type as result', () => {

            var hand = [
                new Card('2', "H"),
                new Card('7', "H"),
                new Card('5', "H"),
                new Card('J', "H"),
                new Card('K', "H")
            ];

            expect(pokerHandTypeChecker.check(hand)).to.be.equal(HandType.FLUSH);
        });
    });
});
