var user_clicked_pattern = [];
var game_pattern = [];
var button_colors = ["red", "blue", "green", "yellow"];
var level = 0;

$(document).ready(function (){
    $(document).keydown(function (){
        if (level == 0){
            $("#level-title").text("Level 0");
            nextSequence();
        }
        
    });
});

$(".btn").click(function (){
    var user_chosen_color = this.id;
    user_clicked_pattern.push(user_chosen_color);
    playSound(user_chosen_color);
    animatePress(user_chosen_color);
    checkAnswer(user_clicked_pattern.length - 1);
});

function nextSequence(){
    user_clicked_pattern = [];
    var random_number = Math.floor(Math.random() * 4);
    var random_chosen_color = button_colors[random_number];
    game_pattern.push(random_chosen_color);
    playSound(random_chosen_color);
    $("#"+random_chosen_color).fadeOut(100).fadeIn(100);
    level += 1;
    $("#level-title").text("Level "+String(level));
}

function playSound(color_name){
    audio = new Audio("sounds/"+color_name+".mp3");
    audio.play();
}

function animatePress(color_name){
    $("#"+color_name).addClass("pressed");
    setTimeout(function (){
        $("#"+color_name).removeClass("pressed");
    }, 100);
}
function checkAnswer(current_level){
    if (user_clicked_pattern[current_level] == game_pattern[current_level]){
        if(current_level == game_pattern.length-1){
            setTimeout(nextSequence, 1000);
        }
    }
    else{
        wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level =0;
    game_pattern = []
}