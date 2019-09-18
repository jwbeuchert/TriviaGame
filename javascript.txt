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
  var timeQuestion = 10000;
  var timeSummary = 15000;
  var time = 0;
  var counter;
  
  
  var timeProgress = {
    start: function(){
      counter = setInterval(timeProgress.count,1000);
    },
    stop: function(){
      clearInterval(counter);
      time = 0;
    },
    count: function(){
      time++;
      console.log(time);
    }
  }
  
  $(document).ready(function(){ 
  });
  
  function initialization(){
    player.isPlaying = !player.isPlaying;
    gameStatus = [];
    player.numberCorrect = 0;
    player.numberIncorrect = 0;
    questionsArray = createQuestionArray();
  }
  
  function createQuestionArray(){
    function questionObject(question, answers, correctAnswer, userAnswer, answerExplanation, picture, isCorrect, isTimeUp){
      this.question = question;
      this.answers = answers;
      this.correctAnswer = this.answers[correctAnswer];
      this.userAnswer = this.answers[userAnswer];
      this.answerExplanation = answerExplanation;
      this.picture = picture;
      this.isCorrect = isCorrect;
      this.isTimeUp = isTimeUp;
    }
  
    var question0 = new questionObject(
      /*question:*/ "The classic 'Don Giovanni' was composed by this great composer from Salzberg, Austria. Who is this classical type?",
      /*answers:*/ ["Vivaldi", "Mozart", "Beethoven", "Bach", null],
      /*correctAnswer:*/ 1,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Wolfgang Amadeus Mozart, born Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a child prodigy, mastering keyboard and violin in his youth. Mozart has over 600 works to his name. The piece 'Don Giovanni' is based on the figure of Don Juan, an infamous womanizer and libertine.",
      /*picture:*/ "assets/images/mozart.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
      
    var question1 = new questionObject(
      /*question:*/ "The example of musical talent used by genetic scientists is a family comprising (among others) Johann Christian and Carl Philip Emmanuel. What is the family name?",
      /*answers:*/ ["Gregorio", "Sfortzando", "Bach", "Leipzig", null],
      /*correctAnswer:*/ 2,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Johann Sebastian Bach fathered a number of great musicians, with multiple wives. His most notable off spring include Johann Christian Bach, Carl Phillip Emmanuel Bach, Wilhelm Freidrich Bach, and Johann Christoph Friedrich.",
      /*picture:*/ "assets/images/bach.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question2 = new questionObject(
      /*question:*/ "'Largo al factotum' is an aria sung by the title character from which of these operas?",
      /*answers:*/ ["Don Giovanni", "Aida", "Carmen", "The Barber of Seville", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The opera was written by Gioachino Rossini and was performed for the first time in 1816, in Rome. The aria 'Largo al factotum della cita', ('Make way for the factotum of the city' in English), is sung by Figaro, the barber of the title. It includes numerous mentions of Figaro's name and describes his popularity and highly rated, at least in his own opinion, abilities.",
      /*picture:*/ "assets/images/largo.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question3 = new questionObject(
      /*question:*/ "Instruments such as the piano, the guitar, and the harp are nice because they are 'self-accompanying. Works for unaccompanied monophonic instruments -- instruments that typically play one note at a time -- are less common. Having said that, which of these pieces IS for solo piano?",
      /*answers:*/ ["Persichetti: Parable IV", "Berio: Sequenza IXa", "Bach: Partita in b minor BWV 1002", "Chopin: Etude in c minor AKA 'The Revolutionary'", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Phil G. Goulding dubs Chopin 'Mr. Piano' in his book, 'Classical Music: The 50 Greatest Composers and their 1,000 Greatest Works,' and with good reason, since the lion's share of Chopin's vast and worthy output is for that instrument.",
      /*picture:*/ "assets/images/chopin.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question4 = new questionObject(
      /*question:*/ "An 18th-century military band would likely have included pairs of oboes, horns, and bassoons. Having received much more recognition for his oratorios, operas, concerti, and sonatas, what German-English composer wrote two arias for the ensemble described above?",
      /*answers:*/ ["CPE Bach", "Gustav Holst", "Ralph Vaughn Williams", "George Fredrich Handel", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Much wind music (and instrumental music in general) has its roots in outdoor music for marching, dancing, and signaling (mail delivery, battle, hunting). Mr. Handel brought wind music indoors with his two arias, possibly composed around 1720.",
      /*picture:*/ "assets/images/margaret-handel.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question5 = new questionObject(
      /*question:*/ "What sinister and spooky-sounding organ piece attributed to Bach is now firmly associated with the Halloween holiday and other tales of horror?",
      /*answers:*/ ["Danse Macabre", "Der Erlkonig", "Devils Trill", "Toccata & Fugue in D Minor", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The Toccata and Fugue in D Minor is one of those pieces where 'you'll know it when you hear it', as it's constantly used to introduce spooky subjects. Curiously, modern scholarship now questions whether it was indeed written by Bach. But no matter who the author was, it's one of the most famous (and loud) pieces in Western classical music.",
      /*picture:*/ "assets/images/phantom.png",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question6 = new questionObject(
      /*question:*/ "Berlioz went to Paris to study what?",
      /*answers:*/ ["Music", "Business", "Physics", "Medicine", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Berlioz' father, the town doctor, wished his son to follow in his footsteps. He sent him to Paris to study medicine.",
      /*picture:*/ "berlioz.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question7 = new questionObject(
      /*question:*/ "Which French composer wrote a suite entitled 'Divertissement', the last movement of which includes blasts on a police whistle?",
      /*answers:*/ ["Jacques Ibert", "Richard Wagner", "Franz Shubert", "William Byrd", null],
      /*correctAnswer:*/ 0,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Ibert based his 1930 suite 'Divertissement' on incidental music he wrote for the play 'Un chapeau de paille d'Italie' ('An Italian straw hat') by Eugène Labiche. The whole piece is gloriously entertaining, culminating in a riotous chase sequence which includes the blowing of a police whistle.",
      /*picture:*/ "assets/images/ibert.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question8 = new questionObject(
      /*question:*/ "Musical prodigy Wolfgang Amadeus Mozart is, perhaps, one of the best-known composers in Western (art) music. During which musical historical period was he active?",
      /*answers:*/ ["Romantic", "Classical", "Baroque", "Impressionist", null],
      /*correctAnswer:*/ 1,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Mozart lived from 1756 until 1791, beginning his musical career at an extremely young age, already composing music at the age of five, and performing (on keyboard and violin) even earlier. With more than 600 composed works, he is considered to be one of the most prolific and influential composers of the Classical period, which lasted from 1750 until 1830.",
      /*picture:*/ "assets/images/classical.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question9 = new questionObject(
      /*question:*/ "What is the name for Chopin's Op. posth. 66?",
      /*answers:*/ ["Fantasie", "Raindrop", "Revolutionary", "Clair De Lune", null],
      /*correctAnswer:*/ 0,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "He regretted writing this piece, because it sounded too much like the third movement of Beethoven's 'Moonlight Sonata'.",
      /*picture:*/ "assets/images/fantasi.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
      
  
    return questionsArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
    // return questionsArray = [question0];
  }
  
  function startQuestionTimer(){
    timeProgress.stop();
    questionTimer = setTimeout(questionTimeRanOut,timeQuestion);
    timeProgress.start(); 
  }
  
  function startSummaryTimer(){
    timeProgress.stop();
    player.isWaiting = !player.isWaiting;
    if (questionsArray.length > 0){
     summaryTimer = setTimeout(setQuestionAnswers,timeSummary);
    }
    else{
      summaryTimer = setTimeout(endGame,timeSummary);
    }
    timeProgress.start();
  }
  
  function stopQuestionTimer(){
    clearTimeout(questionTimer);
  }
  
  function stopSummaryTimer(){
    clearTimeout(summaryTimer);
  }
  
  function questionTimeRanOut(){
    
    currentQuestion.isTimeUp = !currentQuestion.isTimeUp;
    console.log("time ran out!" + currentQuestion.isTimeUp + currentQuestion.userAnswer)
    setUserSelection();
  }
  
  function setQuestionAnswers(){
    removeQuestionAnswers();
    if (player.isWaiting){
      player.isWaiting = !player.isWaiting;
    }
    selectRandomQuestion();
    displayQuestion();
    displayAnswers();
    startQuestionTimer();
  }
  
  
  function selectRandomQuestion(){
    var randomIndex = Math.floor(Math.random()*questionsArray.length);
    currentQuestion = questionsArray[randomIndex];
  
    // remove question from array.  
    questionsArray.splice(randomIndex,1);
  }
  
  
  function displayQuestion(){
  var mainQuestionColumn = $("<div></div>");
    mainQuestionColumn.attr({
      class: "col-md-12",
      id: "questionColumn"
    });
  
    var questionRowDiv = $("<div></div>");
    questionRowDiv.attr({
      class:"row",
      id:"individualQuestionRow"
    });
  
    var firstColumnDiv = $("<div></div>");
    firstColumnDiv.attr({
      class: "col-md-3 question"
    });
  
    var questionColumnDiv = $("<div></div>");
    questionColumnDiv.attr({
      class: "col-md-6 question",
      id: "individualQuestionColumn"
    });
  
    var questionText = $("<h2></h2>");
    questionText.text(currentQuestion.question);
  
    questionText.appendTo(questionColumnDiv);
    firstColumnDiv.appendTo(questionRowDiv);
    questionColumnDiv.appendTo(questionRowDiv);
    questionRowDiv.appendTo(mainQuestionColumn);
    mainQuestionColumn.appendTo("#questionRow");
  }
  
  function displayAnswers(){
    var mainAnswersColumn = $("<div></div>");
    mainAnswersColumn.attr({
      class: "col-md-12",
      id: "answersColumn"
    });
  
    for (i = 0; i < currentQuestion.answers.length - 1; i++){
      var answersRowDiv = $("<div></div>");
      answersRowDiv.attr({
        class: "row",
        id: "answerRow" + i
      })
  
      var firstColumnDiv = $("<div></div>");
      firstColumnDiv.attr({
        class: "col-md-3",
        id: "firstColumn" + i
      });
  
      var secondColumnDiv = $("<div></div>");
      secondColumnDiv.attr({
        class: "col-md-3",
        id: "secondColumn" + i
      });
      
      var answersColumnDiv = $("<div></div>");
      answersColumnDiv.attr({
        class: "col-md-6 answers",
        id: "answer" + i
      });
      var answersText = $("<h2></h2>"); 
      // answersText.text(currentQuestion.answers[i]);
  
      var answerButton = $("<button></button>");
      answerButton.attr({
        class: "answersButtons",
        id: "answerButton" + i
      })
      answerButton.text(currentQuestion.answers[i]);
  
      // answersText.appendTo(answersColumnDiv);
      answerButton.appendTo(answersColumnDiv);
      firstColumnDiv.appendTo(answersRowDiv);
      answersColumnDiv.appendTo(answersRowDiv);
      secondColumnDiv.appendTo(answersRowDiv);
      answersRowDiv.appendTo(mainAnswersColumn);
      mainAnswersColumn.appendTo("#answersRow");
    };
  
    $('html, body').animate({
        scrollTop: $("#answerButton3").offset().top
  }, 2000);
  }
  
  function userSelection(i){
    currentQuestion.userAnswer = currentQuestion.answers[i];
  }
  
  function checkAnswer(){
    if (currentQuestion.correctAnswer == currentQuestion.userAnswer){
      currentQuestion.isCorrect = !currentQuestion.isCorrect;
      player.numberCorrect++;
    }
    else{
      player.numberIncorrect++;
    }
    console.log(currentQuestion);
  }
  
  function collectGameStatus(){
    gameStatus.push(currentQuestion);
    console.table(gameStatus);
  }
  
  function setUserSelection(){
    checkAnswer();
    collectGameStatus();
    stopQuestionTimer();
    summarizeQuesiton();
    displaySummaryQuestion();
    startSummaryTimer(); 
  }
  
  function summarizeQuesiton(){
    if (currentQuestion.isCorrect){
      $(".modal-title").text("Good Job! You answered correctly!");
    } 
    else if(!currentQuestion.isCorrect && !currentQuestion.isTimeUp){
      $(".modal-title").text("Wrong answer... The correct answer is:")
    }
    else if(currentQuestion.isTimeUp){
      $(".modal-title").text("Time's Up!")
    }
    $("#correctAnswer").text(currentQuestion.correctAnswer);
    $(".picture").attr("src",currentQuestion.picture);
    $("#answerExplanation").text(currentQuestion.answerExplanation);
  }
  
  function displaySummaryQuestion(){
    $("#myModal").modal("show");  
    // $("#startGameButton").show();
  
  }
  
  function displayFinalSummary(){
    $("#startGameButton").show();
    $("#pressStartText").show();
    var summaryColumn = $("<div></div>");
    summaryColumn.addClass("col-md-12");
    summaryColumn.attr("id", "summaryColumn");
  
    var questionsCorrectRow = $("<div></div>");
    questionsCorrectRow.addClass("col-md-12");
    questionsCorrectRow.attr("id", "questionsCorrectRow");
  
    var questionsCorrectColumn = $("<div></div>");
    questionsCorrectColumn.addClass("col-md-12");
    questionsCorrectColumn.attr("id", "questionsCorrect");
    questionsCorrectText = $("<h2></h2>");
  
    questionsCorrectText.text("Number of questions correct: " + player.numberCorrect);
  
    questionsCorrectText.appendTo(questionsCorrectColumn);
    questionsCorrectColumn.appendTo(questionsCorrectRow);
    questionsCorrectRow.appendTo(summaryColumn);
  
    var questionsIncorrectRow = $("<div></div>");
    questionsIncorrectRow.addClass("col-md-12");
    questionsIncorrectRow.attr("id", "questionsIncorrectRow");
  
    var questionsIncorrectColumn = $("<div></div>");
    questionsIncorrectColumn.addClass("col-md-12");
    questionsIncorrectColumn.attr("id", "questionsIncorrect");
    questionsIncorrectText = $("<h2></h2>");
  
    questionsIncorrectText.text("Number of questions incorrect: " + player.numberIncorrect);
  
    questionsIncorrectText.appendTo(questionsIncorrectColumn);
    questionsIncorrectColumn.appendTo(questionsIncorrectRow);
    questionsIncorrectRow.appendTo(summaryColumn);
    summaryColumn.appendTo("#summaryRow");
  }
  
  function endGame(){
      removeQuestionAnswers();
      displayFinalSummary();
      console.log("game is over");
      console.table(gameStatus);
      player.isPlaying = !player.isPlaying;
  }
  
  
  function removeQuestionAnswers(){
    $("#myModal").modal("hide");
    $("#questionColumn").remove();
    $("#answersColumn").remove();
  }
  
  $(document).on("click","#startGameButton", function(){
    $("#summaryColumn").remove();
    initialization();
    setQuestionAnswers();
    // startQuestionTimer();
    $("#startGameButton").hide();
    $("#pressStartText").hide();
  });
  
  $(document).on("click", ".answersButtons", function(){
    if (!player.isWaiting && player.isPlaying){
      console.log($(this).attr("id"));
      var selectedAnswer = $(this).attr("id");
      selectedAnswer = parseInt(selectedAnswer.charAt(12));
      userSelection(selectedAnswer);
      setUserSelection();
      console.log(selectedAnswer);
    }
  });