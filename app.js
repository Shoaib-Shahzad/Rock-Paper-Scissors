var you;
var yourScore = 0;
var option;
var optionScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choises").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    option = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("option-choice").src = option + ".png";

    //check for winner
    if (you == option) {
        yourScore += 1;
        optionScore += 1;
    }
    else {
        if (you == "rock") {
            if (option == "scissors") {
                yourScore += 1;
            }
            else if (option == "paper") {
                optionScore += 1;
            }
        }
        else if (you == "scissors") {
            if (option == "paper") {
                yourScore += 1;
            }
            else if (option == "rock") {
                optionScore += 1;
            }
        }
        else if (you == "paper") {
            if (option == "rock") {
                yourScore += 1;
            }
            else if (option == "scissors") {
                optionScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("option-score").innerText = optionScore;
}
