"use strict";
// Це коментар. Далі йде увесь код JS-файлу

function playGame(playerInput){    
    function getMoveName (argMoveId) {
    if (argMoveId  == 1){
    return 'rock';
    }
    else if (argMoveId  == 2){
    return 'paper';
    }
    else if (argMoveId  == 3){
    return'scissors';
    } 
  } 

  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('The number is: ' + randomNumber);

  const argComputerMove = getMoveName (randomNumber);
  printMessage('My move is: ' + argComputerMove);
 
  const argPlayerMove = getMoveName(playerInput);
  printMessage('Your move is: ' + argPlayerMove); 
  


function displayResult (argComputerMove, argPlayerMove) {
  console.log('moves:', argComputerMove, argPlayerMove);
  printMessage('I choose ' + argComputerMove + ', and you ' + argPlayerMove);

    if(argComputerMove == 'rock' && argPlayerMove == 'paper'){
    printMessage ('You win!');
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
console.log (argComputerMove  + ":" + argPlayerMove);  
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
}); 




















 




  
