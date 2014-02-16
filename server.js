var express = require('express');
var app = express();

app.use('/bootstrap', express.static(__dirname + '/css/bootstrap/dist'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.engine('.html', require('jade').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function (req, res) {
	res.render('index', {
		pageTitle: 'hello world'
	});
});

app.listen(3000);
console.log('Server started.');
