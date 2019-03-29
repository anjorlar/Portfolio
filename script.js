const menuBar = document.querySelector('#hamburger');
const details = document.querySelector('#navLinks');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle("change");
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    };
})