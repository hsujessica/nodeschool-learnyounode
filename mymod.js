// const fs = require('fs');

// module.exports = function(directory, extension, callback) {
// 	fs.readdir(directory, (err, list) => {
// 		if (err) {
// 			return callback(err);
// 		}
// 		else {
//  			return list.filter(element => element.indexOf('.' + extension) >= 0).join('\n');
// 		}
// 		callback(null);
// 	});
	
// }


const fs = require('fs');
const path = require('path');

module.exports = function(directory, extension, callback) {
	fs.readdir(directory, (err, list) => {
		if (err) {
			return callback(err);
		}
 		list = list.filter(element => path.extname(element) === '.' + extension);
		callback(null, list);
});
}
