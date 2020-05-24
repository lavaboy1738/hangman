const Board = (()=>{
    const state = {
        lives : null
    }
    let canvas;
    let context;

    const init = () =>{
        canvas = document.querySelector(".hangman-board");
        context = canvas.getContext("2d")
        context.lineWidth = 2;
        context.strokeStyle = "black";
        line1();
        line2();
    }

    const draw = (startX, startY, endX, endY) =>{
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }

    const line1 = () => draw(60, 10, 60, 200);
    const line2 = () => draw(50, 20, 170, 20);
    const rope = () => draw(150, 20, 150, 42);
    const head = () => {
        context.beginPath();
        context.arc(150, 55, 12, 0, Math.PI *2);
        context.stroke();
    }
    const torso = () => draw(150, 66, 150, 104);
    const leftArm = () => draw(150, 79, 130, 94);
    const rightArm = () => draw(150, 79, 170, 94);
    const leftLeg = () => draw(150, 104, 140, 134);
    const rightLeg = () => draw(150, 104, 160, 134);

    const parts = [rightLeg, leftLeg, rightArm, leftArm, torso, head, rope]

    const renderPart = () =>{
        parts[state.lives]();
    }

    const setState = (num) =>{
        state.lives = num;
        renderPart();
    }

    return{
        init,
        setState
    }
})();

export default Board;