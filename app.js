let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
let winMsg = document.getElementById('msg');
let userPoint = document.getElementById('my-score');
let compPoint = document.getElementById('robot-score');
let userMove = document.getElementById('user-move');
let robotMove = document.getElementById('robot-move');



const genCompChoice = () => {
    const option = ['rock', 'paper', 'scissor'];
    const randIndx = Math.floor(Math.random() * 3);
    return option[randIndx];
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log('you win');
        winMsg.innerHTML = 'You are Winner 🏆';
        userScore++;
        userPoint.innerHTML = userScore;
    } else {
        console.log('you lose');
        winMsg.innerHTML = 'Computer is Winner';
        compScore++;
        compPoint.innerHTML = compScore;
    }
   
}


const drawGame = () => {
    console.log('Game is Draw');
    winMsg.innerHTML = 'Game is Draw 🤔';
}

const playGame = (userChoice) => {
    console.log(`user choice ${userChoice}`);
    userMove.innerHTML = `User Choose ${userChoice}`;
    const compChoice = genCompChoice();
    console.log(`computer choice ${compChoice}`);
    robotMove.innerHTML = `Robot Choose ${compChoice}`;
    if (userChoice===compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice==='rock') {
            userWin = compChoice === 'paper' ? false : true
            
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissor' ? false : true
            
        } else {
            userWin=compChoice==='rock'?false:true
        }
            
        showWinner(userWin);    
    }
}





choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});