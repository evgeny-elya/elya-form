import IMask from 'imask';

export const applyPhoneMask = (selector: string): void => {
    const input = document.querySelector(selector) as HTMLInputElement;

    if (input) {
        const phoneMask = IMask(input, {
            mask: '+000 00 000-00-00',
        });
    }
};
