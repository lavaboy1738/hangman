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
        })
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