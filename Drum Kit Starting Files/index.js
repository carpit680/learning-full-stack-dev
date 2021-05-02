var TotalDrums = document.querySelectorAll(".drum").length;
var audio = '' 
var audioName = {
    w : "sounds/crash.mp3",
    a : "sounds/kick-bass.mp3",
    s : "sounds/snare.mp3",
    d : "sounds/tom-1.mp3",
    j : "sounds/tom-2.mp3",
    k : "sounds/tom-3.mp3",
    l : "sounds/tom-4.mp3"
}
for (var i=0; i<TotalDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        audio = new Audio(audioName[this.innerHTML]);
        audio.play();
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown",function (event){
    for (var i=0; i<TotalDrums;i++){
        current_key = document.querySelectorAll(".drum")[i].innerText
        if (`${event.key}` == current_key){
            audio = new Audio(audioName[current_key]);
            audio.play();
            buttonAnimation(current_key);
        }
    }
});

function buttonAnimation(key_pressed){
    var button_animation = document.querySelector("."+key_pressed).classList;
    button_animation.add("pressed");
    setTimeout(function(){button_animation.remove("pressed")}, 200);
    
}