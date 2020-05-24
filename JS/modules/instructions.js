import Game from "./game.js";
import {Sound} from "./sound.js";

const Instructions = (()=>{
    const init = () =>{
        render();
        listeners();
    }

    const hangmanEl = document.querySelector(".hangman");

    const listeners = () =>{
        hangmanEl.addEventListener("click", (event)=>{
            if(event.target.matches(".main-menu")){
                Sound.click.play();
                Game.init()
            }
        })
    }

    const render = () => {
        let markUp = `
        <h1 class="hangman-title">Instructions</h1>
            <div class="hangman-how">
            Guess the word by picking from the alphabet
            <br>
            For every wrong letter picked, you lose one life
            <br>
            When the man is hung, you lose the game
            <br>
            <br>
            hint: secret words are all fruits
            </div>
            <button class="btn main-menu">Start<button>
        `
        hangmanEl.innerHTML = markUp;
    }

    return{
        init
    }
})();

export default Instructions