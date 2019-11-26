var animalBalance = [0,0,0,0,0,0]; // store num of money bet
var luckyNumber = [0,0,0]; //store 3 result of random

window.onload = function(){
	var buttonRandom = document.getElementById("button-random");
	var choice = document.getElementsByClassName("choice");
	var numOfChoice = document.getElementsByClassName("numOfChoice");
	buttonRandom.addEventListener("click",animatedShow);
	for(let i = 0 ; i < 6 ; i++){
		choice[i].addEventListener("click",function(){
			doClick(i);
		});
	}
}


function doClick(i){
	
	var numOfChoice = document.getElementsByClassName("numOfChoice");
	var defaultBalance = document.getElementById("default-balance");

	if(defaultBalance.innerHTML != 0){
		numOfChoice[i].innerHTML = (parseInt(numOfChoice[i].innerHTML) + 1);
		animalBalance[i]+=1000;
		// decrease balance
		var newBalance = parseInt(defaultBalance.innerHTML) - 1000;
		defaultBalance.innerHTML = newBalance;
	}

}


function resultOfChance(){

	var defaultBalance = document.getElementById("default-balance");
	var newBalance = parseInt(defaultBalance.innerHTML);
	for(let i=0 ; i < 3 ; i++){
		for(let j = 0 ; j < 6 ; j++){
			if(luckyNumber[i] == j){
				newBalance += animalBalance[j]*2;
			}
		}
	}
	defaultBalance.innerHTML = newBalance;
	animalBalance = [0,0,0,0,0,0];

	var numOfChoice = document.getElementsByClassName("numOfChoice");
	for(let i = 0 ; i < 6; i++){
		numOfChoice[i].innerHTML = '0';
	}

	// check if have no balance

	if(defaultBalance.innerHTML == 0){
		window.location = "gameOver.html";
	}
}
// show image continuously
function animatedShow(){
	var buttonRandom = document.getElementById("button-random");
	// remove click event to avoid double click button
	buttonRandom.removeEventListener("click",animatedShow);
	var checkTime = 10;
	var loopShow = setInterval(function(){
		checkTime--;
		showRandomImages();
		if(checkTime===0){
			resultOfChance();

			buttonRandom.addEventListener("click",animatedShow);
			clearInterval(loopShow);
		}
	},100);
}
// show a combo 3 image and store last value for checking
function showRandomImages(){
	var random = document.getElementsByClassName("random__sub");
	for(let j = 0 ; j < 3; j++){
		let randomNumber = Math.round(Math.random()*5);
		luckyNumber[j] = randomNumber;
		random[j].src = getRandomImages(randomNumber);
	}
	console.log(luckyNumber);
}

function getRandomImages(randomNumber){
	switch(randomNumber){
		case 0:
			return "images/P1_ho.jpg";
		case 1:
			return "images/P1_bau.jpg";
		case 2:
			return "images/P1_ga.jpg";
		case 3:
			return "images/P1_tom.jpg";
		case 4:
			return "images/P1_ca.jpg";
		case 5:
			return "images/P1_cua.jpg";
	}
}
