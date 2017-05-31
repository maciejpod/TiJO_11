'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('generateMessage without sinon.spy and sinon.stub', function () {

    describe('Text is palindrom', function () {
        it('should return: {' +
            'vowel: 8,' +
            ' palindrome: true,' +
            ' message: \'aaaawaaaa is palindrome and has 8 vovels\'}; when aaaawaaa given', function () {
            expect(app.generateMessage('aaaawaaaa')).to.eql(
                {
                    vowel: 8,
                    palindrome: true,
                    message: 'aaaawaaaa is palindrome and has 8 vovels'
                }
            )
        })

        it('should return: {' +
            'vowel: 0,' +
            ' palindrome: true,' +
            ' message: \'bbbbwbbbb is palindrome and has no vovels\'};  when bbbbwbbbb given', function () {
            expect(app.generateMessage('bbbbwbbbb')).to.eql(
                {
                    vowel: 0,
                    palindrome: true,
                    message: 'bbbbwbbbb is palindrome and has no vovels'
                }
            )
        })

    })

    describe('Text is not palindrom', function () {
        it('should return: {' +
            'vowel: 0,' +
            ' palindrome: true,' +
            ' message: \'bbbbwbbb is not palindrome and has no vovels\'};  when bbbbwbbb given', function () {
            expect(app.generateMessage('bbbbwbbb')).to.eql(
                {
                    vowel: 0,
                    palindrome: false,
                    message: 'bbbbwbbb is not palindrome and has no vovels'
                }
            )
        })

        it('should return: {' +
            'vowel: 0,' +
            ' palindrome: true,' +
            ' message: \'aaawbbb is not palindrome and has vovels\'};  when aaawbbb given', function () {
            expect(app.generateMessage('aaawbbb')).to.eql(
                {
                    vowel: 3,
                    palindrome: false,
                    message: 'aaawbbb is not palindrome and has 3 vovels'
                }
            )
        })
    })

    describe('Incorect data given', function () {
        it('should throw exception when empty string given', function () {
            expect(app.generateMessage).to.throw('Argument is undefined, not a string or empty string!');
        })
    })
});

describe('getDescendingNumbers', function (){
    it('should return string with numbers separated by spaces', function ()    {
        expect(app.getDescendingNumbers(15, 1)).to.eql('15 14 13 12 11 10 9 8 7 6 5 4 3 2 1');
    });
});
