const words = ['rock', 'paper', 'scissors']
function getComputerChoice(){
    const getRandomWord = Math.floor(Math.random() * words.length);
    if(getRandomWord === 0){
        return "rock";
        }
        else if(getRandomWord === 1){
            return "paper"
    }else{
        return "scissors";
    }
}

console.log(getComputerChoice())


function getHumanChoice (){

    const userChoice = prompt('your choice').toLowerCase()

    if(words.includes(userChoice)){
        return userChoice
    }else{
        return 'word not in array'
    }

}



// console.log(getHumanChoice())


const humanScore = 0
const computerScore = 0

function playRound(humanChoice, computerChoice){
    const rules = {
        rock: { beats: 'scissors' },
        paper: { beats: 'rock' },
        scissors: { beats: 'paper' }
    };
    console.log(rules[humanChoice])
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if ( rules[humanChoice] && rules[humanChoice].beats === computerChoice) {
        return "Human wins!";
    } else {
        return "Computer wins!";
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))


 function playGame(humanChoice, computerChoice){

 }
