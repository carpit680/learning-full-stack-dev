var random_number1 = Math.floor(Math.random()*6+1);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + String(random_number1) +".png");

var random_number2 = Math.floor(Math.random()*6+1);
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + String(random_number2) +".png");

if (random_number1 > random_number2){
    document.getElementsByTagName("h1")[0].innerText = "Player 1 wins!"
}
else if (random_number1 < random_number2){
    document.getElementsByTagName("h1")[0].innerText = "Player 2 wins!"
}
else{
    document.getElementsByTagName("h1")[0].innerText = "Draw!"
}