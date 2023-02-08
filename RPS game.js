let player = 0
let computer = 0

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
      player++
      return "You win!"; 
    } else {
      computer++
      return "The computer wins!"; 
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      player++
      return "You win!"; 
    } else {
      computer++
      return "The computer wins!"; 
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      player++
      return "You win!"; 
    } else {
      computer++
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
  console.log('-_-_-_-_-_-')
  }

  // Winner determination after 5 rounds: 
  if (player > computer) {
    console.log("Unimaginable! a scum like you won.")
  } else if (computer > player) {
    console.log("You shit eating piece of scum! you lost to a machine.")
  } else {
    console.log('TIDE!!!!')
  }
}


// call the playGame function to start the game

