const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/testing', function (req, res) {
      	
      res.end('testing');
})


app.post('/testing2', function (request, response) {
	 console.log(request.body);
})

app.get('/', function (req, res) {
      res.end('parent');
})

// add router in the Express app.
app.use("/", router);

var server = app.listen(6060, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
