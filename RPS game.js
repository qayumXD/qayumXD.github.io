// function to get user's choice
function getUserChoice() {
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    return userChoice;
  } else {
    console.log("Invalid choice! Please choose rock, paper or scissors.");
  }
}

// function to get computer's choice
function getComputerChoice() {
  var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else {
      return "The computer wins!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else {
      return "The computer wins!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else {
      return "The computer wins!";
    }
  }
}

// function to play the game
function playGame() {
  for(let i=0; i < 5; i++) {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log("You chose " + userChoice + " and the computer chose " + computerChoice + ".");
  console.log(determineWinner(userChoice, computerChoice));
  }
}

// call the playGame function to start the game
playGame();
