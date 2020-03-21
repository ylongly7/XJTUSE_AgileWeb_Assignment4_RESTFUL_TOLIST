var moment = require('moment');
const {
	writeFile,
	readFile
} = require('./dao');
exports.getTasks = function(req,res){
	dt = readFile("./data.json")
	//console.log(""+dt)
	res.send(JSON.parse(dt))
}
exports.getTasksById = function(req,res){
	id = req.query.id
	dt = readFile("./data.json")
	jsondt = JSON.parse(dt)
	console.log(id)
	for (var k in jsondt){
		obj = jsondt[k]
		if (obj.id==id){
			res.send(JSON.stringify(obj)) 
		}
	}
	res.status(404).send()
}

exports.delectTasksById = function(req,res){
	id = req.query.id
	console.log(id)
	dt = readFile("./data.json")
	jsondt = JSON.parse(dt)
	
	for (var k in jsondt){
		obj = jsondt[k]
		if (obj.id==id){
			jsondt.pop(k)
			writeFile("./data.json",JSON.stringify(jsondt) )
			res.status(200).send()
		}
	}
	res.status(404).send()
}

exports.postTasks = function(req,res){
	dt = readFile("./data.json")
	jsondt = JSON.parse(dt)
	const newTask = req.body
	console.log(""+newTask)
	console.log(JSON.stringify(newTask))
	id = jsondt.length+""
	date =  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');;
	var task = {
		"id": id,
		"content": newTask.content,
		"createdTime": date
	  }
	jsondt.push(task)
	writeFile("./data.json",JSON.stringify(jsondt) )
	res.send("OK")
}

