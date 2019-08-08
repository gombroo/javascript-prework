function playGame(playerInput){
  clearMessages()

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  console.log(computerMove);
  /* if(randomNumber == 1){
      computerMove = 'kamień';
    }	else if (randomNumber == 2) {
    		computerMove = 'papier';
    }	else if (randomNumber == 3) {
    		computerMove = 'nożyce';
    }*/

  printMessage('Mój ruch to: ' + computerMove);
  console.log('Gracz wpisał: ' + playerInput);
  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  const playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);
  /*if(playerInput == '1'){
      playerMove = 'kamień';
    }	else if (playerInput = '2') {
    		playerMove = 'papier';
    }	else if (playerInput = '3') {
    		playerMove = 'nożyce';
    }*/
}

/* function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "papier";
  } else if (argMoveId == 3) {
    return "nożyce";
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
} */

const getMoveName = function(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }
};

/* function displayResult(argComputerMove, argPlayerMove) {
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

  if (argComputerMove == "kamień" && playerMove == "papier") {
    printMessage("Niemożliwe! Wygrałeś!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
    printMessage("Wygrałeś stary!");
  } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
    printMessage("Wow, wygrałeś!");
  } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
    printMessage("Sorry, przegrałeś");
  } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
    printMessage("O jak mi przykro, przegrałeś");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
    printMessage("Stary, przegrałeś!");
  } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
    printMessage("Remis, baby!");
  } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
    printMessage("Remis, baby!");
  } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
    printMessage("Remis, baby!");
  } else if (playerInput == "nieznany ruch") {
    printMessage("Nie umiesz liczyć do 3?");
  }
} */

const displayResult = function(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

    if (argComputerMove == "kamień" && playerMove == "papier") {
      printMessage("Niemożliwe! Wygrałeś!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Wygrałeś stary!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Wow, wygrałeś!");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Sorry, przegrałeś");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("O jak mi przykro, przegrałeś");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      printMessage("Stary, przegrałeś!");
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis, baby!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis, baby!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis, baby!");
    } else if (playerInput == "nieznany ruch") {
      printMessage("Nie umiesz liczyć do 3?");
    }
}

document.getElementById("play-rock").addEventListener("click", function() {
  playGame(1);
});

document.getElementById("play-paper").addEventListener("click", function() {
  playGame(2);
});

document.getElementById("play-scissors").addEventListener("click", function() {
  playGame(3);
});

/*
if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Niemożliwe! Wygrałeś!');
	} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('Wygrałeś stary!');
	} else if (computerMove == 'papier' && playerMove == 'nożyce') {
		printMessage('Wow, wygrałeś!');
	} else if (computerMove == 'papier' && playerMove == 'kamień') {
		printMessage('Sorry, przegrałeś');
	} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
		printMessage('O jak mi przykro, przegrałeś');
	} else if (computerMove == 'nożyce' && playerMove == 'papier') {
		printMessage('Stary, przegrałeś!');
	} else if (computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis, baby!');
	} else if (computerMove == 'kamień' && playerMove == 'kamień') {
		printMessage('Remis, baby!');
	} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
		printMessage('Remis, baby!');
	}
	else (playerInput = 'nieznany ruch') {
		printMessage('Nie umiesz liczyć do 3?');
	}
*/
