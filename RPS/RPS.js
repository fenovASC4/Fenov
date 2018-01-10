var choicePlayer;

var choices = ["Rock", "Paper", "Scissors"];

function playerRock(){
    choicePlayer = "Rock";
    choiceComp = choices[Math.floor(Math.random()*3)];
    if (choiceComp == "Scissors")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Player wins! </p>");
    }
    else if (choiceComp == "Paper")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Computer wins! </p>");
    }
    else
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Its a tie! </p>");
    }
}

function playerScissors(){
    choicePlayer = "Scissors";
    choiceComp = choices[Math.floor(Math.random()*3)];
    if (choiceComp == "Scissors")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Its a tie! </p>");
    }
    else if (choiceComp == "Paper")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Player wins! </p>");
    }
    else
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Computer wins! </p>");
    }
}


function playerPaper(){
    choicePlayer = "Paper";
    choiceComp = choices[Math.floor(Math.random()*3)];
    if (choiceComp == "Scissors")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Computer wins! </p>");
    }
    else if (choiceComp == "Paper")
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Its a tie! </p>");
    }
    else
    {
        $("#computerChoice").html("<p id='computerChoice'> Computer chose " + choiceComp + "</p>");
        $("#result").html("<p id='result'> Player wins! </p>");
    }
}
