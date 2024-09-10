document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
    updatePageContent(page);
});

function updatePageContent(page) {
    // Ocultar todas las secciones
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.style.display = 'none');

    // Mostrar la página correspondiente
    const currentPage = document.getElementById('page' + page);
    if (currentPage) {
        currentPage.style.display = 'block';
    }

    // Actualizar la paginación
    const pageItems = document.querySelectorAll('.page-item');
    pageItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `?page=${page}`) {
            item.classList.add('active');
        }
    });
}

//Deslizamiento suave con color por id

document.addEventListener('DOMContentLoaded', () => {
    // Obtén todos los enlaces con # (hash)
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener('click', event => {
        const targetId = event.currentTarget.getAttribute('href').substring(1); // Obtén el ID del href
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Añade la clase de resalto
          targetElement.classList.add('highlight');
          
          // Remueve la clase después de 2 segundos (mismo tiempo que la animación)
          setTimeout(() => {
            targetElement.classList.remove('highlight');
          }, 2000); // Duración en milisegundos
        }
      });
    });
  });


