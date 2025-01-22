import IMask from 'imask';

export const applyPhoneMask = (selector: string): void => {
    const phoneInput = document.querySelector(selector) as HTMLInputElement | null;

    if (phoneInput) {
        IMask(phoneInput, {
            mask: '+000 00 000-00-00',
        });
    }
};
