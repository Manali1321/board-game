var balls = document.querySelectorAll('.ball');
var board = document.getElementsByClassName('board');
var startbtn = document.getElementById('start');
var gameOverDiv = document.getElementById('game-over')


var ballCount = 0;

balls.forEach(ball => {
    ball.addEventListener('animationend', gameOverEvent)
})


function gameOverEvent() {
    balls.forEach(ball => {
        ball.style.animationPlayState = 'paused';
        ball.classList.add('hide')
    })

    gameOverDiv.classList.remove('hide')
    gameOverDiv.classList.add('game-over')
    startbtn.classList.remove('hide')

}

function startGame() {
    // reset score to zero
    ballCount = 0
    document.getElementById('show_count').innerText = `Score: ${ballCount}`

    // show the ball and start animation
    balls.forEach(ball => {
        ball.classList.remove('hide');
        ball.classList.add('ball-move');
        ball.style.animationPlayState = 'running'
        ball.style.left = Math.floor(Math.random() * 90 + 1) + '%';
    });

    // hide the game over div
    gameOverDiv.classList.add('hide')
    gameOverDiv.classList.remove('game-over')

    // hide the start button
    startbtn.classList.add('hide')
}

function reset(num) {
    // remove hideen balls and animation on click
    balls[num].classList.remove('hide');
    balls[num].classList.add('ball-move');
    balls[num].style.left = Math.floor(Math.random() * 90 + 1) + '%';
    // adding ball count every time clicked on it
    ballCount += 1;
    var counter = '';
    counter += `Score: ${ballCount}`
    document.getElementById('show_count').innerText = counter;
}
function disappear(num) {
    // when clicked happen on ball hide and coming from top
    balls[num].classList.add('hide');
    balls[num].classList.remove('ball-move');
}

// two events fire at one time so set time out
function onClick(num) {
    disappear(num)
    setTimeout(() => {
        reset(num)
    }, 10)
}
