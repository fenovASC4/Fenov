var pokeURL; //This will be the URL for Ajax to use
var pokeIndex; //This is the index of the current pokemon inside of the pokedex
var pokeName; //Stores the name of the current pokemon
var type1; // This will be the type, set equal to the type of the pokemon at the current pokeIndex
var type2; // Only used when a pokemon has more than one type
var multipleType; // Boolean switch to make the quiz act differently when a pokemon has more than one type
var currentQuestion = 0; // Incremented by one every time a question is answered
var score = 0; // Incremented by one everytime a question is answered correctly
var gameOver; // Changes the look of the page to resemble a game over screen. Player reloads to restart
var temp;

function makeURL(){ // This function makes the url
    pokeIndex = Math.floor((Math.random() * 152) + 1);
    pokeURL = "https://pokeapi.co/api/v2/pokemon/" + pokeIndex.toString();
}

makeURL();


function newQuestion(){$.ajax({
    url: pokeURL,
    success: function(data){
        console.log("The pokemon's index is: " + pokeIndex);
        console.log("The URL is: " + pokeURL);
        currentQuestion += 1;
        temp = currentQuestion.toString();
        $("#questionNum").html("<h2 id='questionNum'> You are now on question " + temp + "<h2>")
        pokeName = data.name
        type1 = data.types[0].type.name;
        console.log("The first type is: " + type1); // Logs the first type
        if (data.types.length == 2){
            mutlipleType = true;
        }
        else {
            multipleType = false;
        }
        console.log (multipleType);
        console.log(data.types.length); // Logs how many types the pokemon has
        /*if (data.types.length == 2){ // A conditional used to display the second type if there is one
            type2 = data.types[0].type.name;
            $("#" + type2).html("<button href='incrementScore();' class = 'typeButton' id = '" + type2 + "' >" + type2 + "</button>")
            $("#" + type1).html("<button href='incrementScore();' class = 'typeButton' id = '" + type1 + "' >" + type1 + "</button>")
        }
        else {

        }*/
        console.log (" ")

        $("#Pokemon").html("<h1 class='center'>Guess the type of " + pokeName + "</h1>")
        $("#answerType").html("<p class='center'>" + type1 + "</p>")

    }
})}

newQuestion();

function checkAnswer(buttonID){
    console.log(buttonID);
    if (buttonID == type1 && multipleType == false){
        score += 10;
        temp = score.toString();
        $("#score").html("<h2 id='score'> Your score is now " + temp + "</h2>" )
    }
    makeURL();
    newQuestion();
}
