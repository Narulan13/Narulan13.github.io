const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreElement = document.getElementById('score');
const highscore = document.getElementById('highscore');
const text = document.getElementById('text');
let anim = window.getComputedStyle(cactus).getPropertyValue('animation');
let score = 0;
let scores = [];

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 355);
        increaseScore();
    }
}

function increaseScore() {
    score++;
    scoreElement.textContent = `Score: ${score}`;
}

function startGame() {
    // Используйте touchstart вместо keydown для обработки касаний на мобильных устройствах
    document.addEventListener('touchstart', jump);
    document.addEventListener('keydown', jump);
    
    let scoreTimer = setInterval(function () {
        increaseScore();
    }, 100);

    let is_alive = setInterval(function () {
        const dino_top = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        const cactus_left = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        if (cactus_left < 50 && cactus_left > 0 && dino_top >= 99) {
            clearInterval(is_alive);
            clearInterval(scoreTimer);
            alert("Game over! :(");
            resetGame();
        }
    }, 10);
}

function resetGame() {
    if (score > 0) {
        scores.push(score);
        highscore.textContent = `Hi: ${Math.max(...scores)}`;
    }
    score = 0;
    scoreElement.textContent = "Sc: 0";
    cactus.style.left = '580px';
    text.textContent = "Press Space or Touch to Start";
    cactus.style.animation = 'none';
    document.addEventListener('keydown', startOnSpace);
    document.addEventListener('touchstart', startOnSpace); // Добавлен обработчик для события касания
}

function startOnSpace(event) {
    if (event.code === "Space" || event.type === "touchstart") {
        document.removeEventListener('keydown', startOnSpace);
        document.removeEventListener('touchstart', startOnSpace); // Удаление обработчика после нажатия
        cactus.style.animation = anim;
        text.textContent = "";
        startGame();
    }
}

resetGame();
  