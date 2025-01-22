import { IFormData } from '../interfaces/form-data';

export const validateFormData = (data: IFormData): { isValid: boolean; errors: Partial<IFormData> } => {
    const errors: Partial<IFormData> = {};

    if (!data.name.trim()) {
        errors.name = 'Имя обязательно для заполнения.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.email = 'Введите корректный email.';
    }

    if (!data.phone.trim()) {
        errors.phone = 'Номер обязателен для заполнения.';
    }

    if (!data.message.trim()) {
        errors.message = 'Сообщение обязательно для заполнения.';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
