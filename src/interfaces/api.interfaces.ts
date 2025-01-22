export interface IErrorResponse {
    status: 'error';
    fields: Record<string, string>; // Поля с ошибками, где ключ — имя поля, значение — сообщение об ошибке
}

export interface ISuccessResponse {
    status: 'success';
    msg: string; // Сообщение об успешной отправке
}

export type IApiResponse = IErrorResponse | ISuccessResponse;
