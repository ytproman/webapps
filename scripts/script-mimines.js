function triggerHapticFeedback() {
    if (window.Telegram && window.Telegram.WebApp.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
    }
}

function resetRectangles() {
    triggerHapticFeedback();
    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach((rectangle) => {
        // Убираем класс flipped
        rectangle.classList.remove('flipped');

        // Сбрасываем заднюю сторону
        const back = rectangle.querySelector('.back');
        back.innerHTML = ''; // Очищаем заднюю сторону
        back.style.background = '#085188';  // Возвращаем стандартный темно-синий фон
        back.style.borderRadius = '8px';  // Закругленные углы
        back.style.boxShadow = '0 3px 0 #04306f, 0 2px 3px rgba(0, 0, 0, 0.3)';  // Восстанавливаем исходные тени

        // Восстанавливаем переднюю сторону с кругом
        const front = rectangle.querySelector('.front');
        front.innerHTML = ''; // Очищаем содержимое передней стороны
        const circle = document.createElement('div');
        circle.classList.add('circle'); // Добавляем круг заново
        front.appendChild(circle);
    });
}

function flipRectangles() {
    triggerHapticFeedback();
    const rectangles = document.querySelectorAll('.rectangle');
    const minesCount = parseInt(document.getElementById('mines').value);
    let starCount = 0;

    // Устанавливаем количество звезд в зависимости от выбранного числа мин
    switch (minesCount) {
            case 1:
                starCount = 10; // 1 ловушка = 10 звезд
                break;
            case 2:
                starCount = 9; // 2 ловушки = 9 звезд
                break;
            case 3:
                starCount = 8; // 3 ловушки = 8 звезд
                break;
            case 4:
                starCount = 7; // 4 ловушки = 7 звезд
                break;
            case 5:
                starCount = 6; // 5 ловушек = 6 звезд
                break;
            case 6:
                starCount = 5; // 6 ловушек = 5 звезд
                break;
            case 7:
                starCount = 4; // 7 ловушек = 4 звезды
                break;
            case 8:
                starCount = 3; // 8 ловушек = 3 звезды
                break;
            case 9:
                starCount = 3; // 9 ловушек = 3 звезды
                break;
            case 10:
                starCount = 2; // 10 ловушек = 2 звезды
                break;
            case 11:
                starCount = 2; // 11 ловушек = 2 звезды
                break;
            case 12:
                starCount = 2; // 12 ловушек = 2 звезды
                break;
            case 13:
                starCount = 1; // 13 ловушек = 1 звезда
                break;
            case 14:
                starCount = 1; // 14 ловушек = 1 звезда
                break;
            case 15:
                starCount = 1; // 15 ловушек = 1 звезда
                break;
            case 16:
                starCount = 1; // 16 ловушек = 1 звезда
                break;
            case 17:
                starCount = 1; // 17 ловушек = 1 звезда
                break;
            case 18:
                starCount = 1; // 18 ловушек = 1 звезда
                break;
            case 19:
                starCount = 1; // 19 ловушек = 1 звезда
                break;
            case 20:
                starCount = 1; // 20 ловушек = 1 звезда
                break;
            default:
                starCount = 0;
        }

    // Сбрасываем все ячейки перед выбором новых
    rectangles.forEach((rectangle) => {
        rectangle.classList.remove('flipped');
        const back = rectangle.querySelector('.back');
        back.innerHTML = '';  // Очищаем изображение, если есть
        back.style.background = '#085188';  // Возвращаем стандартный темно-синий фон
        back.style.borderRadius = '8px';  // Закругленные углы
        back.style.boxShadow = '0 3px 0 #04306f, 0 2px 3px rgba(0, 0, 0, 0.3)';  // Изначальные тени

        // Восстанавливаем круг по центру передней части
        const front = rectangle.querySelector('.front');
        front.innerHTML = '';  // Очищаем переднюю сторону
        const circle = document.createElement('div');
        circle.classList.add('circle');
        front.appendChild(circle);
    });

    const starIndexes = new Set();

    while (starIndexes.size < starCount) {
        const randomIndex = Math.floor(Math.random() * rectangles.length);
        starIndexes.add(randomIndex);
    }

    // Окрашиваем только выбранные ячейки
    rectangles.forEach((rectangle, index) => {
        if (starIndexes.has(index)) {
            rectangle.classList.add('flipped');
            const back = rectangle.querySelector('.back');
            const img = document.createElement('img');
            img.src = '../../img/mimines-img/miminesstar.png';
            img.style.width = '100%';
            img.style.height = '100%';
            back.appendChild(img);

            // Добавляем градиент оранжевого цвета и сохраняем закругление углов и тени
            back.style.background = "linear-gradient(to bottom, #fbbf19, #fcb21c, #fb9317)";
            back.style.borderRadius = '8px';  // Закругленные углы
            back.style.boxShadow = '0 3px 0 #fb9317, 0 2px 3px rgba(0, 0, 0, 0.3)';  // Оранжевая тень
        }
    });
}

document.querySelector('.bet-button').addEventListener('click', flipRectangles);
document.querySelector('.restart-button').addEventListener('click', resetRectangles);