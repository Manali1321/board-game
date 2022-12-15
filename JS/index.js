var balls = document.querySelectorAll('.ball')
var board = document.getElementById("screen");
var ballCount = 0;
var gameOver = false
balls[0].addEventListener('animationend',
    gameOverEvent);
balls[1].addEventListener('animationend', gameOverEvent);
balls[2].addEventListener('animationend', gameOverEvent);


function gameOverEvent() {
    balls[0].style.animationPlayState = 'paused'
    balls[1].style.animationPlayState = 'paused'
    balls[2].style.animationPlayState = 'paused'
    if (!gameOver) {
        alert('game over')
    }
}

function startGame() {
    balls.forEach(ball => {
        ball.classList.add('ball-move');
        ball.classList.remove('hide');
        ball.style.left = Math.floor(Math.random() * 500 + 1) + 'px';
    });
}
function reset(num) {
    balls[num].classList.remove('hide');
    balls[num].classList.add('ball-move');
    balls[num].style.left = Math.floor(Math.random() * 500 + 1) + 'px';
    console.log(balls[num].style.left);
    ballCount += 1;
    console.log(ballCount);
    document.getElementById('show_count').innerText = ballCount;
}
function disappear(num) {

    balls[num].classList.add('hide');
    balls[num].classList.remove('ball-move');
}

