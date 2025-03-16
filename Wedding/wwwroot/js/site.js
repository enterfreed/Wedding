
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,       
        status: document.querySelector('input[name="status"]:checked').value,
        alcohol: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.labels[0].innerText),        
    };
    
    fetch('https://localhost:7137/api/Wedding/GetFormData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                return response.json(); 
            }
            throw new Error('Network response was not ok');
        })
        .then(data => {
            console.log('Успех:', data);
            alert('Форма успешно отправлена!');
        })
        .catch((error) => {
            console.error('Ошибка:', error); 
            alert('Произошла ошибка при отправке формы.');
        });
});
