let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'unknown move';


if(randomNumber == 1){
  computerMove = 'rock';
}
else if (randomNumber == 2){
    computerMove = 'paper';
  }

else if (randomNumber == 3){
    computerMove = 'scissors';
  }  
printMessage('My move is: ' + computerMove);

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'unknown move';

if(playerInput == '1'){
  playerMove = 'rock';
}

else if (playerInput == '2'){
    playerMove = 'paper';
  }
else if (playerInput == '3'){
    playerMove = 'scissors';
  }
printMessage('Your move is: ' + playerMove);


if(computerMove == 'rock' && playerMove == 'paper'){
    printMessage('You win!');
  }
else if(computerMove == 'paper' && playerMove == 'scissors'){
    printMessage('You win!');
  }
else if(computerMove == 'scissors' && playerMove == 'rock'){
    printMessage('You win!');
  }
else if(computerMove == 'paper' && playerMove == 'rock'){
    printMessage('You lose!');
  }
else if(computerMove == 'scissors' && playerMove == 'paper'){
    printMessage('You lose!');
  }
else if(computerMove == 'rock' && playerMove == 'scissors'){
    printMessage('You lose!');
  }
else if(computerMove == 'rock' && playerMove == 'rock'){
    printMessage('A draw!');
}
else if(computerMove == 'paper' && playerMove == 'paper'){
    printMessage('A draw!');
}
else if(computerMove == 'scissors' && playerMove == 'scissors'){
    printMessage('A draw!');
}

else if(playerInput >3){    
    printMessage('Please, use number from 1 to 3');
}

else if(playerInput <1){    
    printMessage('Please, use number from 1 to 3');
}






 




  
