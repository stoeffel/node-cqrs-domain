// if exports is an array, it will be the same like loading multiple files...
//module.exports = require('cqrs-domain').defineBusinessRule({
module.exports = require('../../../../../../../').defineBusinessRule({
  name: 'nameEquality', // optional, default is file name without extension
  description: 'firstname should never be equal lastname'
  // priority: 1 // optional, default Infinity, all business rules will be sorted by this value
}, function (changed, previous, events, command, callback) {
  if (changed.get('firstname') === changed.get('lastname')) {
    return callback('names not valid');
    // or
    // return callback(new Error('names not valid'));
    // or
    // return callback(new Error()); // if no error message is defined then the description will be taken
  }
  callback(null);
});
