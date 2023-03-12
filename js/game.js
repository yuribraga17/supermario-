window.onload = function() {
    // Configurações do jogo
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const scoreElement = document.querySelector('.score');

    let score = 0;
    let gameOver = false;

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500); 
    }

    // animação de verificação
    const loop = setInterval(() => {
        console.log('loop');

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        
        console.log(marioPosition);
        
        if (!gameOver && pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            gameOver = true;
            pipe.style.animation='none';
            pipe.style.left=`${pipePosition}px`;

            mario.style.animation='none';
            mario.style.bottom=`${marioPosition}px`;
        } else {
            score++;
            scoreElement.textContent = score;
        }

        if (gameOver) {
            clearInterval(loop);
            mario.src='/img/game-over.png';
            mario.style.width = '55px';
            mario.style.marginLeft='50px';
        }

    }, 10);

    document.addEventListener('keydown', jump);
}
