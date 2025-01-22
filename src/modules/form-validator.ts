import { IFormData } from '../interfaces/form-data';

/**
 * Валидирует данные формы. Проверяет обязательность полей и корректность данных.
 * @param data Данные формы, которые необходимо проверить.
 * @returns Объект с результатами валидации: isValid (валидность формы) и errors (объект с ошибками).
 */
export const validateFormData = (data: IFormData): { isValid: boolean; errors: Partial<IFormData> } => {
    const errors: Partial<IFormData> = {}; // Объект для хранения ошибок

    // Проверка обязательности поля "Имя"
    if (!data.name.trim()) {
        errors.name = 'Имя обязательно для заполнения.';
    }

    // Проверка на корректность email с использованием регулярного выражения
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.email = 'Введите корректный email.';
    }

    // Проверка обязательности поля "Телефон"
    if (!data.phone.trim()) {
        errors.phone = 'Номер обязателен для заполнения.';
    }

    // Проверка обязательности поля "Сообщение"
    if (!data.message.trim()) {
        errors.message = 'Сообщение обязательно для заполнения.';
    }

    // Возвращаем результат валидации
    return {
        isValid: Object.keys(errors).length === 0, // Если ошибок нет, форма валидна
        errors, // Возвращаем объект с ошибками
    };
};
