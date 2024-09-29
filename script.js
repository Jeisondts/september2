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

    openButton.addEventListener('click', () => {
        card.classList.add('open');
        galleryContainer.classList.remove('hidden');
        imageViewer.classList.remove('hidden'); // Mostrar el visor de la imagen principal
        audio.play();
    });

    closeButton.addEventListener('click', () => {
        card.classList.remove('open');
        galleryContainer.classList.add('hidden');
        imageViewer.classList.add('hidden'); // Ocultar el visor
        audio.pause();
    });

    // Añadir la funcionalidad de seleccionar una imagen de la galería
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-src');
            const imgCaption = item.getAttribute('data-caption');
            mainImage.src = imgSrc;
            mainCaption.textContent = imgCaption;
        });
    });
});
