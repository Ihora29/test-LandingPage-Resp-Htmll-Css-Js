alert('hello');

document.querySelector('.lupaIcon').addEventListener('click', function () {
    const input = document.querySelector('.inputSearch');
    console.log('work');

    if (input.style.display === 'none' || input.style.display === '') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
})