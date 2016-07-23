var bodyParser = require('body-parser'); 
var path = require('path'); 
var friends = require('../data/friends.js');


// ROUTING

module.exports = function(app){


	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	app.post('/api/friends', function(req, res){

	var totalDifference = 100; 
	var bestMatch; 

	friends.forEach(function(friend) {
 
		var newDiff = 0; 
		console.log("looping");
		for(i = 0; i < friend.scores.length; i++){
			newDiff += Math.abs(friend.scores[i] - req.body.scores[i])
		}
		if (newDiff <= totalDifference){
			totalDifference = newDiff; 
			bestMatch = friend; 
		}
		}); 
	
		res.json(bestMatch); 
		friends.push(req.body);  
	}); 
}; 