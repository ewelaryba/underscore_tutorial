/*! underscore-tutorial v0.0.0 - MIT license */

'use strict';
var _ = require("underscore");
/**
 * Module dependencies
 */

/**
 * Module exports
 */


/**
 * @param {}
 * @return {}
 * @api public
 */

//map will apply a function to each item in the array so in this case we will Yahoofy each company name with an exclamation point
module.exports.yahoofy = function yahoofy() {
    return _.map(["Google", "Apple", "Oracle"], function (companyName) {
        return companyName + "!";
    });
};

//reduce will turn an array into a single item. (Memo is the initial state of the reduction, and each successive step of it should be returned by iterator. The iterator is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.)-from underscore definitions page.
module.exports.reduce_example = function () {
    return _.reduce(["ap", "pl", "e"], function (memo, letters) {
        return memo + letters;
    });
};

//union unifies arrays, but only takes with it unique values.
module.exports.companyUnion = function () {
    return _.union(["Google", "Apple", "Oracle"], ["Apple", "IBM", "Microsoft", "IBM"]);
};

//zip Merges arrays with values at corresponding positions. Here we are taking companies that participated in mergers and their price and placing them in their own array.
module.exports.acquisition = function () {
    return _.zip(["Facebook", "Yahoo", "Google"], ["WhatsApp", "Tumblr", "YouTube"], ["19 Billion", "1.1 Billion", "1.6 Billion"]);
};

//extend Copies all properties in source object into destination object.
module.exports.extender = function () {
    return _.extend({
        name: 'Warren Buffet'
    }, {
        incomeBracket: '1%'
    });
};

//pick Allows you to pick items from an object that you want to use. 
module.exports.picker = function () {
    return _.pick({
        name: 'Warren Buffet',
        incomeBracket: '1%',
        employer: 'Berkshire Hathaway',
        nickname: 'Wizard of Omaha'
    }, 'nickname', 'incomeBracket');
};

//invert Will invert keys and values in an object.
module.exports.inverter = function () {
   return _.invert({Jobs: "Steve", Page: "Larry", Gates: "Bill"});
};

//pluck Will extract a list of specified property values from an object.
module.exports.extractor = function () {
var Mergers = [{purchaser: 'Yahoo', company: 'Tumblr', price: '1.1 Billion'}, {purchaser: 'Google', company: 'YouTube', price: '1.6 Billion'}, {purchaser: 'Facebook', company: 'WhatsApp', price: '19 Billion'}];
    return _.pluck(Mergers, 'purchaser');
};