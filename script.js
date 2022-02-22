let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");



function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOne = Math.floor(Math.random()*6);
        let dieTwo = Math.floor(Math.random()*6);
        console.log(dieOne,dieTwo);
        document.querySelector("#die-1").setAttribute("src", images[dieOne]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwo]);

    },
    1000
    );
}
roll();

