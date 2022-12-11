

var board = document.getElementById("screen");
// console.log(boardWidth);

function startGame() {
    document.querySelectorAll(".ball").forEach(ball => {
        ball.classList.add('ball-move');
        ball.classList.remove('hide');
        ball.style.left = Math.floor(Math.random() * 500 + 1) + 'px';
    })
    // ball[0]
    // document.getElementsByClassName("ball")
}

function disappear() {
    document.querySelectorAll(".ball").forEach(ball => {
        ball.classList.add('hide');
        ball.classList.remove('ball-move');
    })
}
