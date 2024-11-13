const car = document.getElementById('car');
const obstacle = document.getElementById('obstacle');

let carPosition = 50;
let obstaclePosition = -50;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && carPosition > 0) {
        carPosition -= 10;
    }
    if (event.key === 'ArrowRight' && carPosition < 90) {
        carPosition += 10;
    }
});

function updateGame() {
    car.style.left = carPosition + '%';
    obstacle.style.top = obstaclePosition + 'px';

    if (obstaclePosition > 100) {
        obstaclePosition = -50;
        obstacle.style.left = Math.random() * 90 + '%';
    }

    obstaclePosition += 2;

    if (
        obstaclePosition < 150 &&
        obstaclePosition > 50 &&
        Math.abs(carPosition * window.innerWidth * 0.01 - obstaclePosition) < 20
    ) {
        alert('¡Perdiste! Intenta de nuevo.');
        carPosition = 50;
        obstaclePosition = -50;
    }

    requestAnimationFrame(updateGame);
}

updateGame();
