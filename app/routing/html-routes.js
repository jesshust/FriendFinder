
// DEPENDENCIES

var path = require('path');



module.exports = function(app){

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});  


	app.get('/', function(err,res){
		res.sendFile(path.join(__dirname, '../public/home.html'))
	});

}; 