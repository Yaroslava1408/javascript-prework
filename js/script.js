"use strict";
// Це коментар. Далі йде увесь код JS-файлу
function getMoveName(){}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('The number is: ' + randomNumber);

/*
if(randomNumber == 1){
  argComputerMove = 'rock';
}
else if (randomNumber == 2){
  argComputerMove = 'paper';
  }

else if (randomNumber == 3){
  argComputerMove = 'scissors';
}  

printMessage('My move is: ' + argComputerMove);*/

let argComputerMove = getMoveName(randomNumber);

function getMoveName (argComputerMove) {
if (argComputerMove  == 1){
  return 'rock';
}
else if (argComputerMove  == 2){
  return 'paper';
  }

else if (argComputerMove  == 3){
  return'scissors';
} 
} 
getMoveName (argComputerMove);
printMessage('My move is: ' + argComputerMove);


let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');
console.log('The player chose: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
printMessage('Your move is: ' + argPlayerMove);


/*if(playerInput == '1'){
  
  argPlayerMove = 'rock';
}

else if (playerInput == '2'){
    
  argPlayerMove = 'paper';
  }
else if (playerInput == '3'){
  argPlayerMove = 'scissors';
  }*/

function displayResult (argComputerMove, argPlayerMove) {
  console.log('moves:', argComputerMove, argPlayerMove);
  printMessage('I choose ' + argComputerMove + ', and you ' + argPlayerMove);

if(argComputerMove == 'rock' && argPlayerMove == 'paper'){
    printMessage('You win!');
  }
else if(argComputerMove == 'paper' && argPlayerMove == 'scissors'){
    printMessage('You win!');
  }
else if(argComputerMove == 'scissors' && argPlayerMove == 'rock'){
    printMessage('You win!');
  }
else if(argComputerMove == 'paper' && argPlayerMove == 'rock'){
    printMessage('You lose!');
  }
else if(argComputerMove == 'scissors' && argPlayerMove == 'paper'){
    printMessage('You lose!');
  }
else if(argComputerMove == 'rock' && argPlayerMove == 'scissors'){
    printMessage('You lose!');
  }
else if(argComputerMove == 'rock' && argPlayerMove == 'rock'){
    printMessage('A draw!');
}
else if(argComputerMove == 'paper' && argPlayerMove == 'paper'){
    printMessage('A draw!');
}
else if(argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
    printMessage('A draw!');
}

else if(playerInput >3){    
    printMessage('Please, use number from 1 to 3');
}

else if(playerInput <1){    
    printMessage('Please, use number from 1 to 3');
}
}
displayResult (argComputerMove, argPlayerMove);

console.log (getMoveName ('2'));










 




  
