var Questions = require("../models/questionModel");
var bodyParser = require("body-parser");
var Q = require("q");

module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));


  // start of API
  app.get("/questions", function(req,res){
   res.send("Here are your questions.");
  });

  app.post("/newquestion", function(req, res){
    // create a new question
    var newQuestion = Questions({
      homeworkId: "test",
      question: req.body.question,
      answer: req.body.answer
    });

    newQuestion.save() // use the q promise library. TODO: validations.
    .then(function(response){
      res.send("Success! Here's the response: " + response);
    })
    .catch(function(err){
      res.send("Something went wrong: " + err );
    })
    .done(function(){
      console.log("done");
    });

  });
};
