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

modeButtons.forEach(function() {
    modeButtons[index].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
    })

});

// easyBtn.addEventListener("click", function() {
//    this.classList.add("selected"); 
//    hardBtn.classList.remove("selected");
//    numSquares = 3;
//    colors = generateRandomColors(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    squares.forEach(function(element, index) {
//         if(colors[index]) {
//             element.style.backgroundColor = colors[index];
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }
//     });
// });

// hardBtn.addEventListener("click", function() {
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     squares.forEach(function(element, index) {
//         if(colors[index]) {
//             element.style.backgroundColor = colors[index];
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }
//     });
// });

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
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
})

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
// for(var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
// }


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