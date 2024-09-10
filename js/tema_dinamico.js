// script.js

// Elementos del DOM
const button = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
const body = document.body;

// Cargar el tema guardado si existe
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeStylesheet.setAttribute('href', 'css/style_dark_main.css');
} else {
    body.classList.add('light-theme');
    themeStylesheet.setAttribute('href', 'css/style_light_main.css');
}

// Cambiar el tema al hacer clic
button.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeStylesheet.setAttribute('href', 'css/style_light_main.css');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeStylesheet.setAttribute('href', 'css/style_dark_main.css');
        localStorage.setItem('theme', 'dark');
    }
});
