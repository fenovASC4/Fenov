var choicePlayer = "Rock";

var choices = ["Rock", "Paper", "Scissors"];
var choiceComp = choices[Math.floor(Math.random()*3)];

if (choicePlayer == "Rock" && choiceComp == "Scissors")
{
    console.log("Player wins!");
}
else if (choicePlayer == "Rock" && choiceComp == "Paper")
{
    console.log("Computer wins!");
}
else if (choicePlayer == "Paper" && choiceComp == "Rock")
{
    console.log("Player wins!");
}
else if (choicePlayer == "Paper" && choiceComp == "Scissors")
{
    console.log("Computer wins!");
}
else if (choicePlayer == "Scissors" && choiceComp == "Paper")
{
    console.log("Player wins!");
}
else if (choicePlayer == "Scissors" && choiceComp == "Rock")
{
    console.log("Computer wins!");
}
else if (choicePlayer == choiceComp)
{
    console.log("ITS A TIE!");
}
else
{
    console.log("error");
}