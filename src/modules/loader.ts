import { ILoader } from '../interfaces/loader.interface';

import '../styles/loader.scss';

/**
 * Показывает лоадер
 * @param loader - Элемент лоадера
 */
export const showLoader: ILoader['showLoader'] = (loader: HTMLElement): void => {
   loader.style.display = 'flex'; // Показываем лоадер
};

/**
 * Скрывает лоадер
 * @param loader - Элемент лоадера
 */
export const hideLoader: ILoader['hideLoader'] = (loader: HTMLElement): void => {
    loader.style.display = 'none'; // Скрываем лоадер
};
