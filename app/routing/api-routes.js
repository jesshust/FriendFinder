

var friendData 		= require('../data/friend.js');


// ROUTING

module.exports = function(app){


	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});


	app.post('/api/friends', function(req, res){

		var newFriend = req.body; 

		for (var i = 0; i < newFriend.scores.length; i++) {
			if(newFriend.scores[i] == '1 (Strongly Disagree)'){
				newFriend.scores[i] = 1; 
			} else if(newFriend.scores[i] == '5 (Strongly Agree)')
				newFriend.scores[i] = 5; {

			} else {
				newFriend.scores[i] = parseInt(newFriend.scores[i]); 
			}
		}
		
		var diffArr = []; 

		for(var i = 0; i < friendData.length; i++){

			var friendCompare = friendData[i]; 
			var diffTotal = 0; 

			for(var j = 0; j < friendCompare.scores.length; j++){
				var diffScore = Math.abs(friendCompare.scores[j] - newFriend.scores[j]); 
				diffTotal += diffScore; 
			}

			diffArr[i] = diffTotal; 
		}

		var bestiesNum = diffArr[0]; 
		var bestiesIndex = 0; 

		for (var i = 1; i < diffArr.length; i++){
			if(diffArr[i] < bestiesNum) {
				bestiesNum = diffArr[i]; 
				bestiesIndex = i; 
			}
		}

		friendData.push(newFriend); 

		res.json(friendData[bestiesIndex]); 
	})
}