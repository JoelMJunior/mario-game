const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const displayMenu = document.querySelector(".display-menu");
const bnt_start = document.querySelector("#btn-start");
let gameOver = true;


bnt_start.addEventListener('click', function() {
    startGame();
    displayMenu.style.display = "none";
    gameOver = false;
});

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval (() => {
    console.log('teste');

    if (gameOver === false) {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", ""); 
        console.log(marioPosition);

        // GAMEOVER //
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            gameOverFunc(pipePosition, marioPosition);
        }
        if (pipePosition < 0) {
            console.log('ganhou um ponto');

        }   
    }
}, 10);

function startGame () {
    pipe.removeAttribute("style");
    pipe.classList.add("pipe-animation");

    mario.removeAttribute("style");
    mario.src = "./assets/sprites/super-mario.gif";
}

function gameOverFunc (pipePos, marioPos) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePos}px`;
    pipe.classList.remove("pipe-animation");

    mario.style.animation = "none";
    mario.style.bottom = `${marioPos}px`;

    mario.src = "./assets/sprites/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    
    displayMenu.style.display = "flex";
    gameOver = true;
    //clearInterval(loopGame);
}

document.addEventListener("keydown", jump);
