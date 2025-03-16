// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Собираем данные формы
    const form = event.target.closest('form');
    const formData = new FormData(form);

    // Отправка данных на сервер
    fetch('https://localhost:7137/Wedding/index', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                return response.json(); 
            }
            throw new Error('Network response was not ok');
        })
        .then(data => {
            console.log('Успех:', data); // Обработка успешного ответа
            alert('Форма успешно отправлена! 🎉');
        })
        .catch((error) => {
            console.error('Ошибка:', error); // Обработка ошибок
            alert('Произошла ошибка при отправке формы. 😢');
        });
});
