var expect = require('chai').expect;
var underscore_tutorial = require('../underscore_tutorial');

describe('underscore_tutorial()', function () {
    'use strict';
    it('yahoofy adds an exclamation point', function () {
        var yahoofyResult = underscore_tutorial.yahoofy();
        expect(yahoofyResult).to.include.members(['Google!', 'Apple!', 'Oracle!']);
    });
    it('reduce example reduces an array into a single item', function () {
        var reduce_exampleResult = underscore_tutorial.reduce_example();
        expect(reduce_exampleResult).to.be.equal('apple');
    });
    it('unify reduces a many arrays into a single array', function () {
        var companyUnionResult = underscore_tutorial.companyUnion();
        expect(companyUnionResult).to.include.members(["Google", "Apple", "Oracle", "IBM", "Microsoft"]);
    });
    it('mergers arrays according to corresponding index values', function () {
        var acquisitionResult = underscore_tutorial.acquisition();
        expect(acquisitionResult).to.be.eql([["Facebook", "WhatsApp", "19 Billion"], ["Yahoo", "Tumblr", "1.1 Billion"], ["Google", "YouTube", "1.6 Billion"]]);
    });
    it('extends source properties into destination properties', function () {
        var extendResult = underscore_tutorial.extender();
        expect(extendResult).to.be.eql({
            name: 'Warren Buffet',
            incomeBracket: '1%'
        });
    });
    it('pick properties that you specify from an object', function () {
        var pickerResult = underscore_tutorial.picker();
        expect(pickerResult).to.be.eql({
            nickname: 'Wizard of Omaha',
            incomeBracket: '1%'
        });
    });
    it('inverts keys and properties in an object', function () {
        var inverterResult = underscore_tutorial.inverter();
        expect(inverterResult).to.be.eql({
            Steve: "Jobs",
            Larry: "Page",
            Bill: "Gates"
        });
    });
     it('extracts properties from an object', function () {
        var extractorResult = underscore_tutorial.extractor();
        expect(extractorResult).to.be.eql(
            ['Yahoo', 'Google', 'Facebook']
        );
    });
});