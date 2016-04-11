var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;


var app = express();

//Cofigure app
app.set('view engine', 'ejs');

//__dirname is current folder
app.set('views', path.join(__dirname,'views'));


//use middleware
//using the module to register miffleware with thr app
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var todoItems = [
  { id:1, desc:'foo'},
  { id:2, desc:'foo'},
  { id:3, desc:'foo'},
			];

//define routes
app.get('/', function(req, res) {
	//res.send('Hello express!');

	//Renders a form like RoR
	res.render('index', {
		title: 'My App',
		items: todoItems
	});
});


app.post('/add', function(req, res){
	//middle ware body
	var newItem = req.body.newItem;

	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');

});


app.get('/cracker', function(req,res){
  res.render('cracker', {
    title: 'Combo Cracker',
  });
});

app.get('/facebook', function(req,res){	
	res.redirect('https://www.facebook.com');
});


//Hello Function
/*app.post('/hello', function(req, res){
  var contrib = req.body.contribution;
  contrib + 1;
});*/

app.listen(1337, function () {
	console.log('Slave Ready on 1337');
});
