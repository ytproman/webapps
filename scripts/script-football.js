function triggerHapticFeedback() {
    if (window.Telegram && window.Telegram.WebApp.HapticFeedback) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
    }
}
let pulseCount = 0;

document.querySelector('.kick-button').addEventListener('click', function() {
triggerHapticFeedback();
const circles = document.querySelectorAll('.circle');
const availableCircles = Array.from(circles).filter(circle => !circle.classList.contains('hidden') && !circle.classList.contains('replaced'));
const dots = document.querySelectorAll('.dot');
const fill = document.querySelector('.fill'); // Получаем элемент заполнения

if (pulseCount < 5 && availableCircles.length > 0) {
const randomIndex = Math.floor(Math.random() * availableCircles.length);
const chosenCircle = availableCircles[randomIndex];

chosenCircle.classList.add('hidden');
setTimeout(() => {
    chosenCircle.classList.remove('hidden');
    chosenCircle.classList.add('pulsating');

    setTimeout(() => {
        chosenCircle.classList.remove('pulsating');
        chosenCircle.classList.add('replaced');
        dots[pulseCount].classList.add('active');

        // Увеличиваем ширину заполнения
        fill.style.width = `${(pulseCount + 1) * 20}%`; // Заполняем на 20% за каждый шаг
        pulseCount++;
    }, 2500); // 2.5 секунды пульсации перед заменой на football.png
}, 300); // Ждем, пока мяч исчезнет, перед заменой его на пульсирующий
} else if (pulseCount >= 5) {
// Сбрасываем мячи, счетчик и заполнение
circles.forEach(circle => {
    circle.classList.remove('hidden', 'pulsating', 'replaced');
});
dots.forEach(dot => dot.classList.remove('active'));
fill.style.width = '0%'; // Сбрасываем заполнение
pulseCount = 0;
}
});