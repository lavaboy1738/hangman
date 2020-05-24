import {Sound} from "./sound.js";
import Home from "./home.js"

const End = (()=>{
    const  state = {
        chosenWord: null,
        winOrLose: null
    }

    const hangmanEl = document.querySelector(".hangman")

    const setState = (object) =>{
        state.chosenWord = object.chosenWord;
        state.winOrLose = object.winOrLose;
        render();
        listeners();
    }

    const render = () =>{
        let markUp = `
            <h1 class="hangman-title">Game Over</h1>
            <div class="hangman-result">You ${state.winOrLose}!
            <br>
            <br>
            The Secret Word is:
            <br>
            ${state.chosenWord.toUpperCase()}
            </div>
            <button class="btn main-menu">Main Menu</button>
        `
        hangmanEl.innerHTML = markUp;
    }

    const listeners = () =>{
        hangmanEl.addEventListener("click", (event)=>{
            if(event.target.matches(".main-menu")){
                Sound.click.play();
                Home.init();
            }
        })
    }

    return{
        setState
    }
})();

export default End;