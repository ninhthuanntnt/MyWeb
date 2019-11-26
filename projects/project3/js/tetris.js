var board = [];
var nextBlockBoard = [];

var nextBlock = {
    block: [],
    color: 'green',
    speed: 1
};

var currentBlock = {
    block: [],
    direction: 'up',
    color: 'green',
    speed: 1
};

var blocks = {
    L: [[1,0],
        [1,0],
        [1,0],
        [1,1]],

    rL:[[0,1],
        [0,1],
        [0,1],
        [1,1]],

    I: [[1],[1],[1],[1]],

    Z: [[1,1,0],
        [0,1,1]],
    
    rZ: [[0,1,1],
         [1,1,0]],

    Square: [[1,1],
             [1,1]],
    
    Tank: [[0,1,0],
           [1,1,1]],
}   
// create an empty board
for(let i = 0; i < 22 ; i++){
    let arrTemp = [];
    for(let j = 0; j < 10; j++){
        arrTemp.push(0);
    }
    board.push(arrTemp);
}

console.log(board);
//Create an empty a next block board
for(let i = 0 ; i < 4 ; i++){
    let arrTemp = [];
    for(let j = 0 ; j < 4; j++){
        arrTemp.push(0);
    }
    nextBlockBoard.push(arrTemp);
}
console.log(nextBlockBoard);

//for testing
nextBlock.block = blocks.L;

function addNextBlock(block){
    for(let i = 0; i < 4 ; i++){
        for(let j = 0; j < 4; j++){
            if(block[i][j] != undefined){
                console.log("ss");
                nextBlockBoard[i][j] = block[i][j];
            }
            else 
                break;
        } 
    }
    console.log(nextBlockBoard);
}
addNextBlock(nextBlock.block);