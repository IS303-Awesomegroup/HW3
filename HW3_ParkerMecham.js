//Parker Mecham

//Section 2

/*
This program takes a team and season length, which are given by the user, then generates a random score for each team 
and repeats until the full season's games are played. Then the program shows the team's record and determines
which post-season tournament they will play in, or if they will not go to one at all.  

Each team's score is represented by a variable that is assigned a random number. Whichever team
has a higher score is declared the winner. 
*/

//Variables for the team names and the number of games in the season
var sMyTeamName;
var sOppTeamName;

var iNumGames;

//Score variables for each team
var iMyTeamScore;
var iOppTeamScore;

//Win and loss count variable, i variable for the loop.
var iNumWins = 0;
var iNumLosses = 0;
var i; 
//Output variables
var loopOutput;
var finalOutput;
var sWinningTeam;
var sPostSeason;

//Prompt user to enter in their team name and the number of games in the season, change the game number into an integer. 
sMyTeamName = prompt("What is your team's name?", "My Team");
iNumGames = prompt("How many games will be played in the regular season?", "14");
parseInt(iNumGames);

//loop for the number of games in the season, incrementing until all the games have been played
for(i = 0; i < iNumGames; i++){

    //prompts the user to input the opposing team's name for each game. 
    sOppTeamName = prompt("What is your opponent's name?", "The bad guys");

    //generates a random number for each team and assigns it to their score. 
    iMyTeamScore = Math.floor(Math.random()*101);
    iOppTeamScore = Math.floor(Math.random()*101);

    //If a tie occurs, a new score will be generated until the tie is broken. 
     if(iMyTeamScore === iOppTeamScore)
    {
        while (iMyTeamScore === iOppTeamScore)
        {
            iMyTeamScore = Math.floor(Math.random()*101);
            iOppTeamScore = Math.floor(Math.random()*101); 
        }
    }
    //If the user's team has a higher score, a win will be added to the win counter
    if(iMyTeamScore > iOppTeamScore)
    {
        iNumWins += 1; 
        sWinningTeam = sMyTeamName;
    }
    //if they have a lower score, a loss is added. 
    else if(iMyTeamScore < iOppTeamScore)
    {
        iNumLosses +=1;
        sWinningTeam = sOppTeamName;   
    }

    //outputs the score of the game before moving to the next one
    loopOutput = sWinningTeam + " wins " + iMyTeamScore + "-" + iOppTeamScore + ". Current Record: " + iNumWins + "-" + iNumLosses;
    alert(loopOutput);
}

//Determines which post-season tournament the team will go to.
if(iNumWins / iNumGames >= .75) 
{
    sPostSeason = "March Madness" ;
}
else if(iNumWins / iNumGames >= .5)
{
    sPostSeason = "NIT Tournament";
}
else 
{
    sPostSeason = "See you next year";
}

output = sMyTeamName + " Final Record: " + iNumWins + "-" + iNumLosses + "\n" + "\n" + sPostSeason;

alert(output);