import Home from "./home.js";
import {Sound} from "./sound.js";

const Game = (()=>{
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y" ,"Z"];
    const words = ["grape", "orange", "watermalon", "pear", "peach", "tangerine", "apple", "kiwi", "citrus", "hawthorn", "apricot", "date", "plum", "mango"]
    let chosenWord;
    let guessingWord;
    let lives;
    let guesses;

    const hangmanEl = document.querySelector(".hangman")
    const init = () => {
        //pick a random word
        chosenWord = words[Math.floor(Math.random()*words.length)];
        //formulate an array of underscores according to the random word;
        guessingWord = Array(chosenWord.length).fill("_");
        //initialize the guess array and lives
        guesses = [];
        lives = 7;
        //render the initial page;
        renderInitialPage();
        listeners();
    }

    const listeners = () => {
        hangmanEl.addEventListener("click", (event)=>{
            if(event.target.matches(".main-menu")){
                Home.init();
                Sound.click.play();
            }

            if(event.target.matches(".hangman-letter")){
                mainCheck(event.target.innerText);
                Sound.click.play();
                event.target.classList.add("hangman-letter-selected")
            }
        })
    }

    const updateGuessingWord = (letter) =>{
        chosenWord.split("").forEach((element, index)=>{
            if(element === letter.toLowerCase()){
                guessingWord[index] = letter.toUpperCase();
            }
        })
    }

    const renderGuessingWordAndLives = () =>{
        document.querySelector(".hangman-lives").innerText = `Lives: ${lives}`;
        document.querySelector(".hangman-word").innerText = guessingWord.join("")
    }

    const isTaken = (letter) =>{
        return guesses.includes(letter)
    }

    const won = () => {return guessingWord.join("").toLowerCase() === chosenWord};
    const lost = () => {return lives <= 0}

    const gameOver = () =>{
        if(win()){
            Sound.win.play();
            alert("you win!");
        }else if(lost()){
            Sound.lose.play();
            alert(`You Lost! the word is: ${chosenWord}`);
        }
    }

    const mainCheck = (guess) => {
        //check if the guesses array has the guess already, if it doesn't push, if it does, then don't push. 
        if(isTaken(guess)) return;
        guesses.push(guess);
        //check if the guess is in chosen word;
        if(chosenWord.includes(guess.toLowerCase())){
            //update the guessing word accordingly.
            updateGuessingWord(guess);
        }else{
            lives --;
        }
        //update the guessing word
        //update lives
        renderGuessingWordAndLives()
        setTimeout(gameOver, 100)
    }

    const renderInitialPage = () => {
        let markUp = `
            <div class="hangman-lives">Lives: ${lives}</div>
            <canvas class="hangman-board"></canvas>
            <div class="hangman-word">${guessingWord.join("")}</div>
            <div class="hangman-instructions">Pick Letters from Below</div>
            <ul class="hangman-letters">
                ${createLetters()}
            </ul>
            <button class="btn main-menu">Main Menu</button>
        `;
        hangmanEl.innerHTML = markUp;
    }

    const createLetters = () =>{
        let markUp = ``;
        alphabet.forEach((letter)=>{
            markUp += `<li class="hangman-letter">${letter}</li>`
        });
        return markUp;
    }

    return{
        init
    }
})();

export default Game