var express = require('express');
  
var app = express();
const {
	getTasks,
	postTasks,
	getTasksById,
	delectTasksById
}= require('./controller')
app.use(express.json())
  
app.get('/', (req, res) => res.send('hello'))
app.get("/api/tasks/",getTasks)
app.post("/api/tasks/",postTasks)
app.get("/api/tasks/:id",getTasksById)
app.delete("/api/tasks/:id", delectTasksById)
var port = 4321
app.listen(port, () => console.log(`port ${port}!`))