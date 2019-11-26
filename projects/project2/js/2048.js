var resultTemp = [];
var scoreTemp = 0;
var result;
var score;
for(let i = 1 ; i <= 4 ; i++){
	resultTemp = resultTemp.concat([[0,0,0,0]]);
}
console.log(resultTemp);
 
window.onload = function(){
	var button = document.getElementById("button-play__sub");
	button.addEventListener("click", function(){
		button.parentNode.style.opacity = "0";
		setTimeout(()=>{
			button.parentNode.style.marginTop = "-100%";
		},1000);
		startPlay();
	});

	result = document.getElementsByClassName("box");
	score = document.getElementById("score");
}

var isLose = false;
function startPlay(){
	var row,col;
	row = Math.round(Math.random()*3);
	col = Math.round(Math.random()*3);

	resultTemp[row][col] = getRDValue();

	pos = getRDPoition();

	resultTemp[pos[0]][pos[1]] = getRDValue();

	showOnHtml();

	document.onkeydown = ()=>{
		switch(event.keyCode){
			case 37:
				onLeftArrow();
				break;
			case 38:
				onUpArrow();
				break;
			case 39:
				onRightArrow();
				break;
			case 40:
				onDownArrow();
				break;
		}

		showOnHtml();
		if(checkLose() === true){
			setTimeout(()=>{window.location = 'gameOver.html';}, 2000);
		}
	}
}

// RD === Random

//make a random number between 2 & 4 at a random position
function getRDValue(){
	var num = Math.random();
	if(num < 0.5){
		return 2;
	}
	return 4;
}

//get a random [row,col] for set a random value into this position
function getRDPoition(){
	let positionIsEmpty = [];
	for(let i = 0; i < 4; i++){
		for(let j = 0; j < 4; j++){
			if(resultTemp[i][j] === 0){
				let t = [i , j];
				positionIsEmpty.push(t);
			}
		}
	}

	if(positionIsEmpty.length === 0){
		return null;
	}
	else if(positionIsEmpty.length === 1){
		return positionIsEmpty[0];
	}
	else{
		let randomPos = Math.round(Math.random()*positionIsEmpty.length)-1;
		if(randomPos === -1){
			randomPos = 0;
		}
		console.log("1:"+positionIsEmpty);
		console.log("2:"+randomPos);
		console.log("3:"+positionIsEmpty[randomPos]);

		return positionIsEmpty[ randomPos ];
	}

}

// apply 2 random value get for 2 random position
function setRandomValue(){
	let pos = getRDPoition();
	if(pos === null) return;
	if(pos.length > 0 )
		resultTemp[pos[0]][pos[1]] = getRDValue();
}

//delete zero between 2 value in a row
function deleteZeroBetweenToLeft(){
	  for(let i=0; i< 4; i++){
	  	  resultTemp[i] = resultTemp[i].filter((item)=>{
	  	  	  if(item != 0){
	  	  	  	  return item;
	  	  	  }
	  	  });
	  	  while(resultTemp[i].length != 4){
	  	  	  resultTemp[i].push(0);
	  	  }
	  }
}	
// plus 2 value which is next to each other
function plusEqualValue(){
	  for(let i=0 ; i< 4 ; i++){
	  	  for(let j=0; j<3; j++)
	  	    if(resultTemp[i][j]==resultTemp[i][j+1]){
	  	    	// add to score
	  	  	    scoreTemp += resultTemp[i][j];

	  	  	    resultTemp[i][j]*=2;
	  	  	    resultTemp[i][j+1]=0;
	  	    }
	  }
}

function deleteZeroBetweenToRight(){
	  for(let i=0; i< 4; i++){
	  	  resultTemp[i] = resultTemp[i].filter((item)=>{
	  	  	  if(item != 0){
	  	  	  	  return item;
	  	  	  }
	  	  });
	  	  while(resultTemp[i].length != 4){
	  	  	  resultTemp[i].unshift(0);
	  	  }
	  }
}

function transposeResult(){
	for(let i=0 ; i< 4; i++){
	 	for(let j=i; j< 4; j++){
	 		[resultTemp[i][j],resultTemp[j][i]] = [resultTemp[j][i],resultTemp[i][j]];
	 	}
	}
}

function checkLose(){
	for(let row of resultTemp){
		for(let col of row){
			if(col===0){
				return false;
			}
		}
	}
	for(let i = 0 ; i < 4; i+=2){
		for(let j = 0 ; j < 4 ; j ++){
			let arrayCheck =[];
			if((j-1) >= 0)
				arrayCheck.push(resultTemp[i][j-1]);
			if((j+1) <=3)
				arrayCheck.push(resultTemp[i][j+1]);
			if(i-1 >= 0)
				arrayCheck.push(resultTemp[i-1][j]);
			if((i+1) <=3 )
				arrayCheck.push(resultTemp[i+1][j]);
			console.log("check lose:" + arrayCheck);
			if(arrayCheck.find((x)=>x == resultTemp[i][j]) != undefined){
				return false;
			}
		}
	}
	return true;
}

function onLeftArrow(){
	deleteZeroBetweenToLeft();
	plusEqualValue();
	deleteZeroBetweenToLeft();

	setRandomValue();
	console.log(resultTemp);
}

function onRightArrow(){
	deleteZeroBetweenToRight();
	plusEqualValue();
	deleteZeroBetweenToRight();

	setRandomValue();
	console.log(resultTemp);
}

function onUpArrow(){
	transposeResult();
	deleteZeroBetweenToLeft();
	plusEqualValue();
	deleteZeroBetweenToLeft();
	transposeResult();

	setRandomValue();
	console.log(resultTemp);
}

function onDownArrow(){
	transposeResult();
	deleteZeroBetweenToRight();
	plusEqualValue();
	deleteZeroBetweenToRight();
	transposeResult();

	setRandomValue();
	console.log(resultTemp);
}


// Show result on the HTML file

function showOnHtml(){
	let i = 0;
	let color = 140;
	for(let row of resultTemp){
		for(let col of row){
			result[i].innerHTML = col;
			if(col != 0){
				color = 99 + col*10 + 15;
				result[i].style.backgroundColor = `hsl(${color},33%,76%)`;
			}
			else{
				result[i].style.backgroundColor = '#e6e6ff';
			}
			i++;
		}
	}
	score.innerHTML = scoreTemp;
}
