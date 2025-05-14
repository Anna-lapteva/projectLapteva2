'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});


const modal = document.getElementById('orderModal');
const buyButtons = document.querySelectorAll('.buy-button');
const closeModal = document.querySelector('.close-modal');
const selectedProduct = document.getElementById('selectedProduct');
if (buyButtons) {
// Открываем модальное окно при клике на кнопку Купить
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        selectedProduct.textContent = productName;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });
});
}
// Закрываем модальное окно
if (closeModal) {
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем скролл
});
}

// Закрываем при клике вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Обработка формы
const orderForm = document.querySelector('.modal-form');
if (orderForm) {
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    orderForm.reset();
});
}

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

const headerMenu = document.querySelector('.header__nav');
if (headerMenu) {
  const headerList = headerMenu.querySelector('.header__list');
  const menuData = {
    link1:{
      link: '#',
      title: 'Эликсир здоровья',
    },
    link2:{
      link: '#',
      title: 'Заполнить рецепт',
    },
    link3:{
      link: '#',
      title: 'Купить БАДы',
    },
    link4:{
      link: '#',
      title: 'Проконсультироваться',
    },
  }
  const createLink = (UrlLink, title) =>{
    const link = `
    <a class="header__item-link" href="${UrlLink}">${title}</a>
    `;
    return link;
  }
  for (const linkItem in menuData) {
    const link = menuData[linkItem];
    const linkIndex = createLink(link.UrlLink, link.title);
    headerList.insertAdjacentHTML('beforeend', linkIndex);
  };
  const cardsImages = document.querySelector(".header__nav");
if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".header__list");

    // Пример URL для получения данных с сервера
    const apiUrl = "data.json";

    // Функция для создания карточки
    const createCard = (link,icon,iconAlt,iconWidth,iconHeight,cssclass) => {
        // Шаблонные строки и подстановки
        const image = `
        <li class=".image">
            <img class="${cssclass}" src="${icon}" alt="${iconAlt}" width="${iconWidth}">
        </li>
    `;

        return image;
    };
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Данные
        console.log(typeof (data)); // Тип полученных данных
    
        // for (const item in data) {
        //     const card = data[item];
    
        //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
        //     cardList.insertAdjacentHTML('beforeend', cardElement);
        // }
    
        data.forEach(item => {
            const cardElement = createCard(item.link, item.icon, item.iconAlt, item.iconWidth, item.iconHeight, item.cssclass);
            cardListImages.insertAdjacentHTML('beforeend', cardElement);
        });
        });
    };
}

    const slider = document.querySelector('.swiper');

    if (slider) {
        const swiper = new Swiper(slider, {
            // Дополнительные параметры
            slidesPerView: 4, // Количество слайдов на экране
            spaceBetween: 30, // Расстояние между слайдами
            loop: true,  // Зацикливание слайдов

            // Пагинация
            pagination: {
                el: '.swiper-pagination',
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

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
