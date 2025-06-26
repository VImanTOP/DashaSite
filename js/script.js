// Пример простого JavaScript для демонстрации интерактивности
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик события для ссылок в навигации
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            console.log('Нажата ссылка:', this.textContent);
            // Дополнительная логика, например, плавная прокрутка
        });
    });

    // Добавляем обработчик события для отправки формы (просто для примера)
    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем отправку формы
            alert('Форма отправлена (имитация)');
            // Здесь можно добавить код для реальной отправки формы на сервер
        });
    }
});
