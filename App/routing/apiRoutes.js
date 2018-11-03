let friends = require('../data/friends');
let path = require("path");

module.exports = function(app) {
    app.get('/api/friends', function(req,res){
        res.json(friends);
    });
    //API post request
    app.post('/api/friends', function(req,res){

    //user inputs
    let user = req.body;
    let userInfo = user.results;

    let friendMatch = "";
    let friendImage = "";
    let difference = [];

    let bffMath = userInfo.reduce((a,b) => a  + parseInt(b), 0);
    let bffScore = parseInt(bffMath);



        
    })
}