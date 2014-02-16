var express = require('express');
var app = express();

app.engine('.html', require('jade').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.get('/', function (req, res) {
	res.render('index', {
		pageTitle: 'hello world'
	});
});

app.listen(3000);
console.log('Server started.');
