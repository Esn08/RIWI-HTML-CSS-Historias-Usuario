
// Event listener
document.addEventListener('DOMContentLoaded', () => {

    // Variable to control the state of the button
    let value = true;

    // Get elements by Id or Class
    const changeColorBtn = document.getElementById('changeColor');
    const changeHeader = document.getElementById('Header');
    const title = document.querySelector('h1')
    const background = document.querySelector('main')
    const container = document.querySelector('.container')

    const textVisible = document.querySelector('.hidden')
    const textHidden = document.querySelector('.show')

    // When click button
    changeColorBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // Change CSS styles
        if (value) {

            // Hide the first text and show the new text
            if (textVisible && textHidden) {
                    textVisible.classList.toggle('hidden');
                    textHidden.classList.toggle('hidden');
                }

            // Change styles
            container.style.backgroundColor = '#e5ffff';
            background.style.backgroundColor = '#e5ffff';
            title.style.color = '#ff8b38';
            changeHeader.style.backgroundColor = '#befeff';

            textHidden.style.display = 'none';
            textVisible.style.display = 'block';

            if (!title.textContent.includes('¡Bienvenidos!')) {
                    title.textContent = title.textContent + ',' + ' ¡Bienvenidos!'
                }

            // Change the state of the button
            value = false;
        }

        // Go back to the first state
        else {
            changeHeader.style.backgroundColor = '#FFA86DFF';
            container.style.backgroundColor = '#f5f5f5';
            background.style.backgroundColor = '#f5f5f5';
            textHidden.style.display = 'block';
            textVisible.style.display = 'none';

            if (textVisible && textHidden) {
                textVisible.classList.toggle('hidden');
                textHidden.classList.toggle('hidden');
            }

            if (title.textContent.includes('¡Bienvenidos!')) {
                title.textContent = "Portafolio de Esneider"
            }

            // Change the state of the button again
            value = true;

        }

    })
})