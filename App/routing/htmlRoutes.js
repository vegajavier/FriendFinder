let path = require('path');

module.exports =function(app) {
    app.get('/survey', function (req,res){
        res.sendFile(path.join(__dirname + './App/public/survey.html'));
    });

    app.use(function (req, res){
        res.sendFile(path.join(__dirname + './App/public/home.html'));
    });
};