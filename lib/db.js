var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "foobot";
var password = "foopass";
var address = "@ds027688.mongolab.com:27688/testdb";
connect();

// Connect to mongo db
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}
function disconnect() {
	mongoose.disconnect();
}