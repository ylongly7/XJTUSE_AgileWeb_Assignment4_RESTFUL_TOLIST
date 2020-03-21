var fs = require('fs')
exports.readFile =  function(path){
	var data = fs.readFileSync(path);
	return data
}

exports.writeFile = function(path,content){
	fs.writeFile(path, content,  function(err) {
	   if (err) {
		   return console.error(err);
	   }
	})
}