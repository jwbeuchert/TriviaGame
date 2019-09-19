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
        /*question:*/ "What brand of golf ball does George pull out of the whale's blow hole?",
        /*answers:*/ ["Nike", "Titleist", "Srixon", "Callaway", null],
        /*correctAnswer:*/ 1,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "In this episode Kramer was hitting golf balls into the ocean. Later George is on the beach with his date and someone calls out for a marine biologist as there is a whale struggling in the shallows. George had lied to his date, saying that he is a marine biologist. He has no choice but to go into the water and try to save the whale. He eventually pulls out a golf ball from the whale's blow hole - a Titleist which is the brand of gold balls Kramer had been hitting in the ocean. The ensuing story that is told to the group from George is a classic 'Seinfeld' moment which Jerry himself has said is his favorite scene from the whole series.",
        /*picture:*/ "assets/images/georgeTitleist.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
        
      var question1 = new questionObject(
        /*question:*/ "Who or what is called ‘Golden Boy’?",
        /*answers:*/ ["The sick boy that Kramer wants to help escape from the hospital", "Jerry - his mother's pet name for him", "Jerry's T-shirt", "The boy that beats George in a game of Trivial Pursuit", null],
        /*correctAnswer:*/ 2,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ " Jerry talks about his favorite yellow t-shirt with Elaine which he calls ‘Golden Boy’. It is ‘dying’ because it is so old and at the end of the episode, he tells Elaine that it didn't make the final wash cycle. It has been replaced by his son, ‘Baby Blue’.",
        /*picture:*/ "assets/images/jerryGoldenBoy.png",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question2 = new questionObject(
        /*question:*/ "What conversation is had between George and Jerry in the pilot episode and 'The Finale'? ",
        /*answers:*/ ["How many dates are you obligated to break off a relationship in person", "Where the best toilet in New York is located", "What is the opposite of eating tuna", "The buttons on George's shirt", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "In the pilot episode Jerry mentions how the position of the second button on George's shirt is in the wrong place and how the second button 'makes or breaks' a shirt. In the final episode, while in jail, Jerry makes the same observation and comment to George which makes George ask if they've had the same conversation before.",
        /*picture:*/ "assets/images/secondButton.png",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question3 = new questionObject(
        /*question:*/ " What is the name of Elaine's boyfriend whom she wants to change his name because it is the same as a serial killer?",
        /*answers:*/ ["Ted Bundy", "Samuel Little", "Jeffrey Dahmer", "Joel Rifkin", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "In 'The Masseuse', Elaine is embarrassed because her boyfriend shares his name with a real life serial killer. As with a lot of Elaine's boyfriends, they argue over changing his name and it comes to a head at a baseball game. They split up.",
        /*picture:*/ "assets/images/joelRifkin.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question4 = new questionObject(
        /*question:*/ "What are the names of the hostile male couple that confront Kramer in 'The Soup Nazi'?",
        /*answers:*/ ["Bill and Cedric", "Bob and Cedric", "Bill and Ray", "Bob and Ray", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "This couple actually accost Kramer in several episodes - 'The Soup Nazi', 'The Sponge', and 'The Puerto Rico Day'. In 'The Soup Nazi' they confront Kramer and steal Elaine's armoire that Kramer is guarding for her. In 'The Soup Nazi', one of the couples is referred to as Ray, but in 'The Sponge' episode he is referred to as Cedric.",
        /*picture:*/ "assets/images/bobAndRay.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question5 = new questionObject(
        /*question:*/ "What is Newman's first name?",
        /*answers:*/ ["Norman", "Wayne", "Bob", "No one knows", null],
        /*correctAnswer:*/ 3,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "Newman's name is never mentioned in the 'Seinfeld' series. In one episode an actress calls him 'Norman', but only because she read the script wrong and the director thought it was funny and left it in.",
        /*picture:*/ "assets/images/newman.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question6 = new questionObject(
        /*question:*/ "Who gives Jerry the astronaut pen?",
        /*answers:*/ ["Crazy Joe Devola", "Uncle Leo", "Jack Klompus", "Kenny Bania", null],
        /*correctAnswer:*/ 2,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "While visiting his parents in Florida, their neighbor, Jack Klompus comes into their home and Jerry remarks about his pen. Jack claims it is an astronaut pen as it writes upside down. Jerry is fascinated and Jack offers to him. After several refusals, Jerry accepts it much to the chagrin of his parents.",
        /*picture:*/ "assets/images/jackKlompus.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question7 = new questionObject(
        /*question:*/ "What is Tim Whately's profession?",
        /*answers:*/ ["Dentist", "Conductor", "Soup store owner", "Relator", null],
        /*correctAnswer:*/ 0,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "He is a dentist who appears in many episodes. He causes Jerry a lot of grief - converting to Judaism for the jokes, re-gifting a label maker, and having 'Penthouse' magazines in his office waiting room to name a few.",
        /*picture:*/ "assets/images/timWhately.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question8 = new questionObject(
        /*question:*/ "Jerry convinces Babu to change his failing restaurant to what type of restaurant?",
        /*answers:*/ ["International", "Pakistani", "Indian", "Iranian", null],
        /*correctAnswer:*/ 1,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "Jerry gave Babu troubles at every turn. He opens his 'Dreamy Cafe' near Jerry's apartment but doesn't do well. Jerry suggests changing the menu and style to that of his homeland - Pakistan. That results in no customers at all and culminates in Jerry coming in for a meal and Babu treating him very badly because of his anger which Jerry cannot understand.",
        /*picture:*/ "assets/images/babu.jpg",
        /*isCorrect:*/ false,
        /*isTimeUp:*/ false);
    
      var question9 = new questionObject(
        /*question:*/ "What is the name of the baseball player that Elaine dates?",
        /*answers:*/ ["Keith Hernandez", "Fred Lynn", "Bert Blyleven", "Rich Gossage", null],
        /*correctAnswer:*/ 0,
        /*userAnswer:*/ 4,
        /*answerExplanation:*/ "Keith plays himself in the two-part episode 'The Boyfriend'. Jerry develops a boy crush on Keith but stops the relationship when Keith asks him to help him move his furniture to a new home which Jerry thinks is too early in the relationship. After a JFK inspired moment with Kramer and Newman, they agree to help Keith move.",
        /*picture:*/ "assets/images/keithHernandez.jpg",
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