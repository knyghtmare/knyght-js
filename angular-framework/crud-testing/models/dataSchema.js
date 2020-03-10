var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    name: {type:String},
    capital: {stype:String}
});

module.exports = mongoose.model('country', countrySchema);