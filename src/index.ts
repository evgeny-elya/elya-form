import { applyPhoneMask } from './modules/phone-mask';
import { validateForm, showValidationErrors } from './modules/form-validation';
import { submitForm } from './modules/form-submit';

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector<HTMLFormElement>('.contact-form__form');

    if (form) {
        applyPhoneMask('#phone');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const errors = validateForm(form);
            showValidationErrors(errors, form);

            if (Object.keys(errors).length === 0) {
                const formData = {
                    name: (form.querySelector<HTMLInputElement>('#name')?.value || ''),
                    email: (form.querySelector<HTMLInputElement>('#email')?.value || ''),
                    phone: (form.querySelector<HTMLInputElement>('#phone')?.value || ''),
                    message: (form.querySelector<HTMLTextAreaElement>('#message')?.value || ''),
                };

                await submitForm(formData);
            }
        });
    }
});
