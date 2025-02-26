// Animaciones de Scroll (GSAP)
document.addEventListener('DOMContentLoaded', function () {
    // Animación de entrada para las secciones
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });
    });

    // Efecto de parallax para imágenes de fondo
    gsap.utils.toArray('.parallax').forEach(parallax => {
        gsap.to(parallax, {
            backgroundPositionY: '-20%',
            scrollTrigger: {
                trigger: parallax,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    });

    // Efecto de hover en proyectos
    gsap.utils.toArray('.proyecto').forEach(proyecto => {
        proyecto.addEventListener('mouseenter', () => {
            gsap.to(proyecto, { y: -10, duration: 0.3 });
        });
        proyecto.addEventListener('mouseleave', () => {
            gsap.to(proyecto, { y: 0, duration: 0.3 });
        });
    });
});