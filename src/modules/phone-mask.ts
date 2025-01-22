import IMask from 'imask';

/**
 * Применяет маску для ввода номера телефона.
 * @param selector Селектор элемента input, к которому необходимо применить маску.
 */
export const applyPhoneMask = (selector: string): void => {
    // Получаем элемент по селектору
    const phoneInput = document.querySelector(selector) as HTMLInputElement | null;

    // Проверяем, существует ли элемент
    if (phoneInput) {
        // Применяем маску к элементу
        IMask(phoneInput, {
            mask: '+000 00 000-00-00', // Формат маски: +000 00 000-00-00
        });
    }
};
