//first create the function for the options question that can be asked 
$(document).ready(function(){
    var questions= [
        {

            question: "How many Final Fantasy games are there in the main series as of today?",
            choice:["12", "15", "20", "16"],
            answer: 1,
            photo: "assets/images/FF.jpg"
        },
        {

            question: "In the Mario games, What species are the little mushroom people at the Mushroom Kingdom ",
            choice:["Toad", "Funguys", "Toadstool", "Shroom"],
            answer: 0,
            photo: "assets/images/toad.gif"
        },
        {

            question: "What game had the Dr. Willy Stage in the Mega Man series?",
            choice:["Mega Man 5", "Mega Man 1", "Mega Man 11", "Mega Man 2"],
            answer: 3,
            photo: "assets/images/megaman.jpg"
        },
        {

            question: "Sonic's first game was in:?",
            choice:["1999", "2000", "1990", "1991"],
            answer: 3,
            photo: "assets/images/sonic.gif"
        },
        {

            question: "Who was the last Boss in Donkey Kong Country?",
            choice:["King.K.Rool", "Manky Kong", "Master Necky ", "Lord Fredrik"],
            answer: 0,
            photo: "assets/images/kingkrool.jpg"
        },
        {

            question: "What was Game of the Year in 2018?",
            choice:["Celeste", "Monster Hunter: World", "God of War", "Marvel's Spider-Man"],
            answer: 2,
            photo: "assets/images/godofwar.jpg"
        }];
        //set all my variables that i have for my functions 
        var rightcounter= 0;
        var wrongcounter= 0;
        var unanswered= 0;
        // timer variable 
        var timer= 20;
        var intervalId;
        var userGuess ="";
        var running = false;
        var qCount = questions.length;
        var pick;
        var index;
      

      
        $("#start").on("click", function (){
            $("#start").hide();
            showQuestion();
            runtimer();
            for(var i = 0; i < questions.length; i++){
            holder.push(questions[i])
            }
        })
        //timer start
        function runtimer(){
            if (!running) {
            intervalId = setInterval(decrement, 1000); 
            running = true;
            }
        }
        //timer countdown
        function decrement() {
            $("#timercounter").html("<h3>Time remaining: " + timer + "</h3>");
            timer --;
        
            //stop timer if reach 0
            if (timer === 0) {
                unanswered++;
                stop();
                $("#answerbox").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }	
        }
        
        //timer stop
        function stop() {
            running = false;
            clearInterval(intervalId);
        }
        // did not understand this at all 
        function showQuestion() {
       
            index = Math.floor(Math.random()*questions.length);
            pick = questions[index];
        }
})