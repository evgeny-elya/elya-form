// Получаем элементы модального окна и кнопку закрытия
const modal = document.getElementById('modal') as HTMLElement;
const closeButton = document.getElementById('modal-close') as HTMLElement;
const openModalButton = document.getElementById('open-modal-btn') as HTMLElement;

// Функция для открытия модального окна
const openModal = (): void => {
    modal.classList.add('show');
    document.body.classList.add('modal-open'); // Блокируем прокрутку страницы
};

// Функция для закрытия модального окна
const closeModal = (): void => {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open'); // Восстанавливаем прокрутку
};

// Закрытие модального окна по клику на крестик
closeButton.addEventListener('click', closeModal);

// Открытие модального окна по клику на кнопку
openModalButton.addEventListener('click', openModal);
