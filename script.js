var sumSquares=6;
var color= generateRandomColor(sumSquares);

var square= document.querySelectorAll('.square');
var colorDisplay = document.getElementById('color-display');
var checkDisplay = document.getElementById('checkDisplay');
var headingBg = document.querySelectorAll('.heading');
var playAgain= document.querySelector('#playAgain');
var easy= document.querySelector('#easy');
var hard= document.querySelector('#hard');

playAgain.addEventListener("click", function(){
    color= generateRandomColor(sumSquares);
    colorPicked= randomColor();
    colorDisplay.textContent= colorPicked;
    for(var i=0; i< square.length; i++){
        square[i].style.backgroundColor= color[i];
    } 
})

easy.addEventListener("click", function(){
    sumSquares=3;
    color= generateRandomColor(sumSquares);
    colorPicked= randomColor();
    colorDisplay.textContent= colorPicked;
    for(var i=0; i< square.length; i++){
        if(color[i]){
        square[i].style.backgroundColor= color[i];
        }
        else{
        square[i].style.display= "none";
        }
    } 
})

hard.addEventListener("click", function(){
    sumSquares=6;
    color= generateRandomColor(sumSquares);
    colorPicked= randomColor();
    colorDisplay.textContent= colorPicked;
    for(var i=0; i< square.length; i++){
        square[i].style.backgroundColor= color[i];
        square[i].style.display= "block";
    }
})

var colorPicked = randomColor();
console.log(colorPicked);

colorDisplay.textContent= colorPicked;

for(var i=0; i<square.length; i++){
    //set color to squares
    square[i].style.backgroundColor= color[i];

    square[i].addEventListener('click', function(){
        //grab a color of square box
        var clickedColor= this.style.backgroundColor;
        console.log(clickedColor);

        //compare color of square to colorPicked
        if(clickedColor === colorPicked){
            checkDisplay.textContent= 'correct!';
            changeColor(clickedColor);
            headingBg.style.backgroundColor= clickedColor;
        }
        else{
            checkDisplay.textContent= 'try again';
            this.style.backgroundColor= '#232323';
        }
    });
}

function changeColor(clickedColor){
    for(var i=0; i<square.length; i++){
        square[i].style.backgroundColor= clickedColor;
    }
}

function randomColor(){
    var random=Math.floor(Math.random()*color.length);
    return color[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0; i< num;i++){
        arr.push(randomSquareColor())
    }
    return arr;
}

function randomSquareColor(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", "+ b +")";
}