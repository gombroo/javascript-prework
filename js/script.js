let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}	else if (randomNumber == 2) {
		computerMove = 'papier';
}	else if (randomNumber == 3) {
		computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}	else if (playerInput = '2') {
		playerMove = 'papier';
}	else if (playerInput = '3') {
		playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


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
