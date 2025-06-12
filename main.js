// Galería de imágenes
const imageUpload = document.getElementById('imageUpload');
if (imageUpload) {
    imageUpload.addEventListener('change', function(e) {
        const gallery = document.getElementById('imageGallery');
        gallery.innerHTML = '';
        Array.from(e.target.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.createElement('img');
                img.src = event.target.result;
                img.width = 150;
                img.style.margin = "10px";
                gallery.appendChild(img);
            }
            reader.readAsDataURL(file);
        });
    });
}

// Video
const videoUpload = document.getElementById('videoUpload');
if (videoUpload) {
    videoUpload.addEventListener('change', function(e) {
        const videoGallery = document.getElementById('videoGallery');
        videoGallery.innerHTML = '';
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const video = document.createElement('video');
                video.src = event.target.result;
                video.controls = true;
                video.width = 320;
                videoGallery.appendChild(video);
            }
            reader.readAsDataURL(file);
        }
    });
}

// Función para mostrar una sola sección con animación
function mostrarSeccion(id) {
    document.querySelectorAll('main > section, .clase').forEach(sec => {
        sec.classList.remove('seccion-activa');
        sec.classList.add('oculto');
    });
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.classList.remove('oculto');
        // Forzar reflow para reiniciar la animación
        void seccion.offsetWidth;
        seccion.classList.add('seccion-activa');
    }
}

// Navegación principal
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-btn').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        mostrarSeccion(this.getAttribute('href').replace('#', ''));
    });
});

// Mostrar solo inicio al cargar
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('main > section, .clase').forEach(sec => {
        sec.classList.add('oculto');
        sec.classList.remove('seccion-activa');
    });
    const inicio = document.getElementById('inicio');
    if (inicio) {
        inicio.classList.remove('oculto');
        void inicio.offsetWidth;
        inicio.classList.add('seccion-activa');
    }
    const btnInicio = document.querySelector('.nav-btn[href="#inicio"]');
    if (btnInicio) btnInicio.classList.add('active');
});

// Vida Universitaria: mostrar clase específica
document.querySelectorAll('.clase-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSeccion(this.getAttribute('href').replace('#', ''));
        const materia = document.getElementById('materia');
        if (materia) {
            materia.classList.remove('seccion-activa');
            materia.classList.add('oculto');
        }
    });
});

// Volver a Vida Universitaria
document.querySelectorAll('.volver-materia').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        mostrarSeccion('materia');
    });
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open'); // Esto activa la animación del botón
});