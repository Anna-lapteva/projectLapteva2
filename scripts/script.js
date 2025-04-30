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

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.carousel-dot');
    const cards = document.querySelectorAll('.product-card');
    const cardWidth = cards[0].offsetWidth + 25; // ширина карточки + gap
    
    let currentIndex = 0;
    
    // Обновление активной точки
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Прокрутка карусели
    function scrollToIndex(index) {
        carousel.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateDots();
    }
    
    // Кнопки навигации
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < dots.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    });
    
    // Точки навигации
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToIndex(index);
        });
    });
    
    // Автоматическое обновление точек при скролле
    carousel.addEventListener('scroll', () => {
        const newIndex = Math.round(carousel.scrollLeft / cardWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
        }
    });
});

const modal = document.getElementById('orderModal');
const buyButtons = document.querySelectorAll('.buy-button');
const closeModal = document.querySelector('.close-modal');
const selectedProduct = document.getElementById('selectedProduct');

// Открываем модальное окно при клике на кнопку Купить
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        selectedProduct.textContent = productName;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });
});

// Закрываем модальное окно
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем скролл
});

// Закрываем при клике вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Обработка формы
const orderForm = document.querySelector('.modal-form');
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    orderForm.reset();
});

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    // Добавляем небольшую задержку для плавности (можно убрать)
    setTimeout(function() {
        preloader.classList.add('hidden');
        content.classList.add('visible');
        
        // Удаляем прелоадер из DOM после анимации
        setTimeout(function() {
            preloader.remove();
        }, 500); // Время должно совпадать с временем transition
    }, 1000); // Искусственная задержка для демонстрации
});