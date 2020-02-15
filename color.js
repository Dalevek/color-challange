var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var modeButtons = document.querySelectorAll(".mode");

modeButtons.forEach(function(element, index) {
    modeButtons[index].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    })
});

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    squares.forEach(function(element, index, array) {
        if(colors[index]) {
            element.style.backgroundColor = colors[index];
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", reset)


colorDisplay.textContent = pickedColor;
squares.forEach(function(element, index, array) {
    element.style.backgroundColor = colors[index];
    element.addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
});

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g  + ", " + b + ")";
}