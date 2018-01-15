// LEARN YOU NODE DECEMBER 2017

// BABY STEPS

// console.log(process.argv.slice(2).reduce((sum, el) => sum + parseInt(el, 10), 0));


// MY FIRST I/O!

// const fs = require('fs');
// const buf = fs.readFileSync(process.argv[2]);
// const str = buf.toString();
// console.log(str.split('\n').length - 1);


// MY FIRST ASYNC I/O!
 
// const fs = require('fs');
// fs.readFile(process.argv[2], 'utf8', (err, data) => {
// 	if (! err) {
// 		console.log(data.split('\n').length - 1);
// 	}
// });


// FILTERED LS

// const fs = require('fs');
// fs.readdir(process.argv[2], (err, list) => {
// 	if (! err) {
// 		console.log(list.filter(element => element.indexOf('.' + process.argv[3]) >= 0).join('\n'));
// 	}
// });


// MAKE IT MODULAR
const mymod = require('./mymod.js');
let dir = process.argv[2];
let ext = process.argv[3];
mymod(dir, ext, (err, list) => {
	if (err) {
		console.log(err);
	}
	list.forEach(element => console.log(element));
});





