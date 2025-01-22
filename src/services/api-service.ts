import axios, { AxiosResponse } from 'axios';
import { IFormData } from '../interfaces/form-data';
import { IErrorResponse, ISuccessResponse } from '../interfaces/api.interfaces';

const SUCCESS_URL = 'https://run.mocky.io/v3/0af5bdd0-3938-4124-842b-cc3c35755526';
const ERROR_URL = 'https://run.mocky.io/v3/182c834a-b21a-47cf-a019-21abc7ccfad7';

/**
 * Функция отправки формы.
 * @param formData Данные формы.
 * @param simulateError Если true, отправляем на URL, который возвращает ошибку.
 */
export const submitForm = async (
    formData: IFormData,
    simulateError: boolean = false,
): Promise<ISuccessResponse | IErrorResponse> => {
    const url = simulateError ? ERROR_URL : SUCCESS_URL;

    try {
        const response: AxiosResponse<ISuccessResponse | IErrorResponse> = await axios.post(url, formData);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка сети или сервера');
    }
};
