
// Event listener
document.addEventListener('DOMContentLoaded', () => {


    // Get elements by Id or Class
    const changeColorBtn = document.getElementById('changeColor');
    const changeHeader = document.getElementById('Header');
    const title = document.querySelector('h1')
    const background = document.querySelector('.main')
    const container = document.querySelector('.container')

    const contacto = document.getElementById('contacto')
    const textVisible = document.querySelector('.hidden')
    const textHidden = document.querySelector('.show')


    // When click button
    changeColorBtn.addEventListener('click', (event) => {
        event.preventDefault();


        // Hide the first text and show the new text
        if (textVisible && textHidden) {
            textVisible.classList.toggle('hidden');
            textHidden.classList.toggle('hidden');
        }

        // Change properties
        container.style.backgroundColor = '#e5ffff';
        background.style.backgroundColor = '#e5ffff';
        title.style.color = '#ff8b38';
        changeHeader.style.backgroundColor = '#befeff';
        contacto.style.backgroundColor = 'rgba(224,224,224,0.91)';
        textHidden.style.display = 'none';
        textVisible.style.display = 'block';

        if (!title.textContent.includes('¡Bienvenidos!')) {
            title.textContent = title.textContent + ',' + ' ¡Bienvenidos!'}
    })
})