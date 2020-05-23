import Game from "./game.js";
import Instructions from "./instructions.js"
import {Sound} from "./sound.js";

const Home = (()=>{
    //cacheing the dom
    const hangmanEl = document.querySelector(".container");
    const init = () => {
        render();
        listeners();
    }

    const render = () => {
        const markUp = `
            <h1 class = "hangman-title">Hangman</h1>
            <div class="buttons">
                <button class = "btn btn-start">Start</button>
                <button class = "btn btn-instructions">Instructions</button>
            </div>
        `
        hangmanEl.innerHTML = markUp;
    }

    const listeners = () => {
        const startBtn = document.querySelector(".btn-start").addEventListener("click", ()=>{
            Game.init();
            Sound.click.play();
        });
        const instructionsBtn = document.querySelector(".btn-instructions").addEventListener("click", ()=>{
            Instructions.init();
            Sound.click.play();
        });
    }

    return{
        init,
        listeners
    }
})();

export default Home;