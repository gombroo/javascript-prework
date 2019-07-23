function playGame(playerInput){
    clearMessages()

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        }   else if (randomNumber == 2) {
                return 'papier';
        }   else if (randomNumber == 3) {
                return 'nożyce';
        }   else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
        }
    }

/*
    function displayResult(argComputerMove, argPlayerMove){

        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
        }   else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
        }   else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
        }   else if  (argComputerMove == 'papier' && argPlayerMove == 'papier')  {
                printMessage('Remis');
        }   else if  (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')  {
                printMessage('Remis');
        }   else if  (argComputerMove == 'kamień' && argPlayerMove == 'kamień')  {
                printMessage('Remis');
        }
        else {
        printMessage('Tym razem przegrywasz :(');
      }
    }
*/

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /* if(randomNumber == 1){
      computerMove = 'kamień';
    }	else if (randomNumber == 2) {
    		computerMove = 'papier';
    }	else if (randomNumber == 3) {
    		computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);

    /*if(playerInput == '1'){
      playerMove = 'kamień';
    }	else if (playerInput = '2') {
    		playerMove = 'papier';
    }	else if (playerInput = '3') {
    		playerMove = 'nożyce';
    }*/

    printMessage('Twój ruch to: ' + playerMove);

}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Niemożliwe! Wygrałeś!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrałeś stary!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wow, wygrałeś!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Sorry, przegrałeś');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('O jak mi przykro, przegrałeś');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Stary, przegrałeś!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis, baby!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis, baby!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis, baby!');
    } else (playerInput = 'nieznany ruch') {
        printMessage('Nie umiesz liczyć do 3?');
    }
}

    document.getElementById('play-rock').addEventListener('click', function(){
        printMessage('Wybrałeś kamień');
    });

    document.getElementById('play-paper').addEventListener('click', function(){
        printMessage('Wybrałeś papier');
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
        printMessage('Wybrałeś nożyczki');
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
