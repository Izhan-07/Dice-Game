var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");

var answer = Math.floor(Math.random()*6) + 1;
var answer2 = Math.floor(Math.random()*6) + 1;

var no_of_guesses = 0;
var guessed_nums = [];

function play1(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 6){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.";
        }
        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high.";
        }
        else if(user_guess == answer){
            msg1.textContent = "Yayy You Win!!";
            document.getElementById("my_btn1").disabled = true;
        }
    }
}

function play2(){
    var user_guess2 = document.getElementById("guess2").value;
    if(user_guess2 < 1 || user_guess2 > 6){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(user_guess2);
        no_of_guesses+= 1;

        if(user_guess2 < answer2){
            msg2.textContent = "Your guess is too low.";
        }
        else if(user_guess2 > answer2){
            msg2.textContent = "Your guess is too high.";
        }
        else if(user_guess2 == answer2){
            msg2.textContent = "Yayy You Win!!";
            document.getElementById("my_btn2").disabled = true;
        }
    }
}
