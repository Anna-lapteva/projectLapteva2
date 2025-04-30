'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

document.querySelectorAll('.header__item-link').forEach(link => {
    // * 1. Начало.
    // * 2. Получаем текст.
    // *    2.1. Добавляем обработчик наведения курсора на текст:
    // *        2.1.1. Да:
    // *            2.1.1.1. Показываем подчеркивание.
    // *            2.1.2. Нет: продолжаем.
    // *        2.2. Добавлем обработчик курсор уходит с текста:
    // *            2.2.1. Да:
    // *                2.2.1.1. Скрываем подчеркивание.
    // *            2.2.2. Нет: продолжаем.
    // * 3. Конец
    link.addEventListener('mouseover', function() {
        this.style.borderBottom = '2px solid #000';
        this.style.paddingBottom = '0px';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.borderBottom = 'none';
        this.style.paddingBottom = '0';
    });
});