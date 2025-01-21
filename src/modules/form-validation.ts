interface ValidationErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export const validateForm = (form: HTMLFormElement): ValidationErrors => {
    const errors: ValidationErrors = {};

    const nameInput = form.querySelector<HTMLInputElement>('#name');
    const emailInput = form.querySelector<HTMLInputElement>('#email');
    const phoneInput = form.querySelector<HTMLInputElement>('#phone');
    const messageInput = form.querySelector<HTMLTextAreaElement>('#message');

    if (!nameInput?.value) errors.name = 'Имя обязательно для заполнения';
    if (!emailInput?.value) errors.email = 'E-mail обязателен для заполнения';
    if (!phoneInput?.value) errors.phone = 'Телефон обязателен для заполнения';
    if (!messageInput?.value) errors.message = 'Сообщение обязательно для заполнения';

    if (emailInput?.value && !/\S+@\S+\.\S+/.test(emailInput.value)) {
        errors.email = 'Некорректный email';
    }

    return errors;
};

export const showValidationErrors = (errors: ValidationErrors, form: HTMLFormElement): void => {
    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const phoneError = form.querySelector('#phone-error');
    const messageError = form.querySelector('#message-error');

    if (nameError) nameError.textContent = errors.name || '';
    if (emailError) emailError.textContent = errors.email || '';
    if (phoneError) phoneError.textContent = errors.phone || '';
    if (messageError) messageError.textContent = errors.message || '';

    form.querySelector('#name')?.classList.toggle('error', !!errors.name);
    form.querySelector('#email')?.classList.toggle('error', !!errors.email);
    form.querySelector('#phone')?.classList.toggle('error', !!errors.phone);
    form.querySelector('#message')?.classList.toggle('error', !!errors.message);
};
