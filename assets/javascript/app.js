// Creating Objects, storing certain variables
var player = {
    isPlaying: false,
    isWaiting: false,
    numberCorrect: 0,
    numberIncorrect: 0,
    wins: 0,
    losses: 0
  }

   // Setting up an empty array for questions, the current question, and the status of the game (timer)
   var questionsArray = [];
   var currentQuestion;
   var gameStatus = [];

     // timer variables.  timer = variable for javascript timer.  time = variables for actual time.
  var questionTimer;
  var summaryTimer;
  var timeQuestion = 30000;
  var timeSummary = 10000;
  var time = 0;
  var counter;