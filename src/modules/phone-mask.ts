import Inputmask from 'inputmask';

export const applyPhoneMask = (selector: string): void => {
    const input = document.querySelector(selector) as HTMLInputElement;
    if (input) {
        const im = new Inputmask('+999 99 999-99-99');
        im.mask(input);
    }
};
