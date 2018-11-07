let friends = require('../data/friends.js');
let path = require('path');

module.exports = function(app) {
    app.get('/api/friends', function(req,res){
        res.json(friends);
    });
    //API post request
    app.post("/api/friends", function(req, res) {

        let bff = {
            name: "",
            profilePicture: "",
            difference: 100

        };

        let userInfo = req.body;
        let userResults = userInput.results;

        /////Loop friends.js arr
        for (var i = 0; i < friends.length; i++) {
            let resultsDifference = 0;

            //The general convention is to use i, j and k as index counters in for loops. //codeacademy.com
            for (var j = 0; j < friends[i].results[j]; j++) {
                resultsDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].results[j]));

                if (resultsDifference <= bff.difference) {
                    bff.name = friends[i].name;
                    bff.photo = friends[i].photo;
                    bff.difference = resultsDifference
                }
            }
        }
        //user to database
        friends.push(userInfo);

        res.json(bff);
    });

}