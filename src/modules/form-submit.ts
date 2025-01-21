interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const submitForm = async (formData: FormData): Promise<void> => {
    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Форма успешно отправлена');
        } else {
            alert('Ошибка при отправке формы');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке формы');
    }
};
