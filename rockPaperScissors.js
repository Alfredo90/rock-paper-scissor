const words = ['rock', 'paper', 'sisscors']
function getComputerChoice(){
    const getRandomWord = Math.floor(Math.random() * words.length);
    if(getRandomWord === 0){
        return "rock";
        }
        else if(getRandomWord === 1){
            return "paper"
    }else{
        return "sisscors";
    }
}

console.log(getComputerChoice());


function getHumanChoice (word){

    const getWordInput =   prompt() === 'rock' || 'paper' || 'scissors' ? word : 'wrong choice'

    console.log(getWordInput)


    }
    console.log(getHumanChoice())
