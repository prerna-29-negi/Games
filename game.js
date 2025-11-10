let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's random choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function to handle draw scenario
const drawGame = () => {
  msg.innerText = "Game was a Draw. Play again!";
  msg.style.backgroundColor = "#081b31";
};

// Function to display the winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Main function to play one round
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // Rock beats scissors, loses to paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Paper beats rock, loses to scissors
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      // Scissors beats paper, loses to rock
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listeners for all choice buttons
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});