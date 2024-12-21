$(document).ready(function() {
    let trapCount = 3;
    const validTrapCounts = [2, 3, 5, 7]; // Допустимые значения для ловушек
    const container = $('#container1');
    let lastClickTime = 0; // Переменная для хранения времени последнего клика
    const notificationInterval = 5000; // Интервал в миллисекундах (5 секунд)

    // Функция для создания квадратов
    function createSquares() {
        container.empty(); // Очистка контейнера
        for (let i = 0; i < 25; i++) {
            const squareWrapper = $('<div>', { class: 'square-wrapper' });
            const square = $('<div>', { class: 'square' });
            const icon = $('<img>', {
                class: 'icon',
                src: "../../img/mines1win-img/starblue.png",
                alt: 'icon'
            });
            squareWrapper.append(square).append(icon);
            container.append(squareWrapper);
        }
    }
    function triggerHapticFeedback() {
        if (window.Telegram && window.Telegram.WebApp.HapticFeedback) {
            window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
        }
    }

    // Создание начальных квадратов
    createSquares();

    // Обновление количества ловушек
    function updateTrapCount(increment) {
        const currentIndex = validTrapCounts.indexOf(trapCount);
        if (increment && currentIndex < validTrapCounts.length - 1) {
            trapCount = validTrapCounts[currentIndex + 1];
        } else if (!increment && currentIndex > 0) {
            trapCount = validTrapCounts[currentIndex - 1];
        }
        $('#trap-count').text(trapCount);
    }

    // Обработчики для кнопок плюс и минус
    $('#trap-minus1').click(function() {
        triggerHapticFeedback();
        updateTrapCount(false);
    });

    $('#trap-plus1').click(function() {
        triggerHapticFeedback();
        updateTrapCount(true);
    });

    // Применение эффекта взрыва к звездам в зависимости от количества ловушек
    $('#explodeButton').click(function() {
        triggerHapticFeedback();
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < notificationInterval) {
            showNotification("Please wait 5 seconds.");
            return;
        }
        lastClickTime = currentTime;
        createSquares(); // Восстановление всех квадратов перед новым взрывом
        triggerExplosion();
    });

    // Функция для получения случайных уникальных индексов
    function getRandomIndexes(total, count) {
        const indexes = [];
        while (indexes.length < count) {
            const randIndex = Math.floor(Math.random() * total);
            if (!indexes.includes(randIndex)) {
                indexes.push(randIndex);
            }
        }
        return indexes;
    }

    // Функция для взрыва квадратов
    function triggerExplosion() {
        const squares = $('.square');
        const audio = new Audio('/static/startest.mp3'); // Путь к вашему звуку
        let starCount;
        switch (trapCount) {
            case 2:
                starCount = 8;
                break;
            case 3:
                starCount = 5;
                break;
            case 5:
                starCount = 4;
                break;
            case 7:
                starCount = 3;
                break;
        }

        const randomIndexes = getRandomIndexes(squares.length, starCount);

        randomIndexes.forEach((index, i) => {
            setTimeout(function() {
                audio.currentTime = 0; // Перематываем звук на начало
                audio.play(); // Воспроизводим звук
                $(squares[index]).explode({
                    radius: 100,
                    minRadius: 20,
                    release: true,
                    fadeTime: 500,
                    recycle: false,
                    explodeTime: 500,
                    maxAngle: 360,
                    gravity: 1,
                    groundDistance: 800,
                    land: true
                });
            }, i * 590);
        });
    }
    function showNotification(message) {
        const notification = $('#notification1');
        const progressBar = $('#progress-bar');

        // Устанавливаем сообщение и показываем уведомление
        notification.text(message).show().css('z-index', '10000').removeClass('fade-out');

        // Обнуляем ширину прогресс-бара и запускаем анимацию на 2 секунды
        progressBar.css('width', '0%').show().animate({ width: '100%' }, 2000, function() {
            console.log("Прогресс-бар завершил анимацию"); // Проверка анимации
        });

        // Через 2 секунды скрываем уведомление
        setTimeout(function() {
            notification.addClass('fade-out');
            setTimeout(function() {
                notification.hide();
                progressBar.hide();  // Скрываем прогресс-бар после анимации
            }, 500);  // Время для завершения анимации
        }, 2000);  // Время отображения уведомления
    }


    // Обработчик для кнопки "Закрыть"
    $('#closeButton').click(function() {
        window.location.href = "/games"; // Перенаправление на вкладку Games
    });

});
// Анимация белых точек
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
            particlesArray.push(new Particle());
        }
    }
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initParticles();
animateParticles();
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Отключаем стандартное поведение при мультитач событиях
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault(); // Отключаем двойное нажатие
    }
    lastTouchEnd = now;
}, false);
