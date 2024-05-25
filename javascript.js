function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;
  
    // Function to get computer's choice
    function getComputerChoice() {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    // Function to get human's choice
    function getHumanChoice() {
      const validChoices = ["rock", "paper", "scissors"];
      let choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
  
      while (!validChoices.includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
      }
  
      return choice;
    }
  
    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
      computerChoice = computerChoice.toLowerCase();
  
      if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
      }
  
      const winningCombos = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
      };
  
      if (winningCombos[humanChoice] === computerChoice) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
      } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
      }
    }
  
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(`Round ${i + 1}: Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
  
    // Declare the winner
    if (humanScore > computerScore) {
      console.log(`You win the game! Final score: Human ${humanScore}, Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You lose the game! Final score: Human ${humanScore}, Computer ${computerScore}`);
    } else {
      console.log(`The game is a tie! Final score: Human ${humanScore}, Computer ${computerScore}`);
    }
  }
  
  // Start the game
  playGame();
  