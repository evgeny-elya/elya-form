import { applyPhoneMask } from './phone-mask';
import { validateFormData } from './form-validator';
import { submitForm } from '../services/api-service';
import { IFormData } from '../interfaces/form-data';
import { IErrorResponse, ISuccessResponse } from '../interfaces/api.interfaces';
import { showLoader, hideLoader } from './loader'; // Импортируем функции для работы с лоадером

export const initializeForm = (): void => {
    const form = document.querySelector('.contact-form__form') as HTMLFormElement | null;
    const phoneInput = '#phone';
    const loader = document.getElementById('loader') as HTMLElement; // Указываем тип элемента loader
    const simulateErrorCheckbox = document.getElementById('simulate-error') as HTMLInputElement;

    if (!form || !loader) return; // Если форма или лоадер не найдены, прекращаем выполнение

    applyPhoneMask(phoneInput);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Показываем лоадер
        showLoader(loader);

        const formData: IFormData = {
            name: (document.getElementById('name') as HTMLInputElement).value.trim(),
            email: (document.getElementById('email') as HTMLInputElement).value.trim(),
            phone: (document.getElementById('phone') as HTMLInputElement).value.trim(),
            message: (document.getElementById('message') as HTMLTextAreaElement).value.trim(),
        };

        // Проверяем, выбран ли чекбокс для симуляции ошибки
        const simulateError = simulateErrorCheckbox?.checked ?? false;

        const { isValid, errors } = validateFormData(formData);
        clearErrors();

        if (!isValid) {
            displayErrors(errors);
            hideLoader(loader); // Прячем лоадер в случае ошибки
            return;
        }

        try {
            const response = await submitForm(formData, simulateError);

            if (response.status === 'success') {
                handleSuccess(response as ISuccessResponse);
            } else if (response.status === 'error') {
                handleErrors(response as IErrorResponse);
            }
        } catch (error) {
            alert('Произошла ошибка при отправке формы. Попробуйте еще раз. (Смотрите консоль)');
        } finally {
            hideLoader(loader); // Скрываем лоадер после завершения запроса
        }
    });
};

// Функции для отображения и скрытия лоадера
const clearErrors = (): void => {
    document.querySelectorAll('.error-message').forEach((el) => {
        el.textContent = '';
    });
    document.querySelectorAll('.contact-form__input, .contact-form__textarea').forEach((el) => {
        el.classList.remove('contact-form__input--error');
    });
};

const displayErrors = (errors: Record<string, string>): void => {
    Object.entries(errors).forEach(([field, message]) => {
        const errorElement = document.getElementById(`${field}-error`);
        const inputElement = document.getElementById(field);

        if (errorElement && inputElement) {
            errorElement.textContent = message;
            inputElement.classList.add('contact-form__input--error');
        }
    });
};

const handleSuccess = (response: ISuccessResponse): void => {
    alert(response.msg);

    const form = document.querySelector('.contact-form__form') as HTMLFormElement | null;

    if (form) {
        form.reset(); // Сбрасываем форму
    }
};

const handleErrors = (response: IErrorResponse): void => {
    displayErrors(response.fields);
};
