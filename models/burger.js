
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },

//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };


// module.exports = burger;

var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		})
    },

	update: function(id, cb) {
		orm.update("burgers", id, cb);
	},

	create: function(name, cb) {
		orm.create("burgers", name, cb);
	}
}

module.exports = burger;
