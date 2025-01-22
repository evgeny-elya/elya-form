import './index.scss';
import './styles/modal.scss';  // Подключаем стили для модального окна
import './modules/modal';      // Подключаем логику модального окна

import { initializeForm } from './modules/form-handler';

document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
});
