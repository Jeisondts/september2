document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const openButton = document.querySelector('.open-card');
    const closeButton = document.querySelector('.close-card');
    const audio = document.getElementById('background-audio');
    const galleryContainer = document.querySelector('.gallery-container');
    const imageViewer = document.querySelector('.image-viewer');
    const mainImage = document.getElementById('main-image');
    const mainCaption = document.getElementById('main-caption');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Abrir galería y mostrar visor de imagen
    openButton.addEventListener('click', () => {
        card.classList.add('open');
        galleryContainer.classList.remove('hidden');
        closeButton.classList.remove('hidden');
        audio.play();
    });

    // Cerrar galería
    closeButton.addEventListener('click', () => {
        card.classList.remove('open');
        galleryContainer.classList.add('hidden');
        imageViewer.classList.add('hidden');  // Ocultar el visor de imagen cuando se cierra la galería
        closeButton.classList.add('hidden');
        audio.pause();
    });

    // Mostrar imagen seleccionada en el visor
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-src');
            const imgCaption = item.getAttribute('data-caption');
            mainImage.src = imgSrc;  // Cambiar la imagen principal
            mainCaption.textContent = imgCaption;  // Cambiar el texto de la descripción
            imageViewer.classList.remove('hidden');  // Asegurar que el visor esté visible cuando se seleccione una imagen
        });
    });
});
