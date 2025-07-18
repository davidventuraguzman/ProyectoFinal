const langButtons = document.querySelectorAll("[data-language]");

// Al hacer clic en un idioma
langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = button.dataset.language;
        localStorage.setItem("idioma", lang); // Guardar idioma seleccionado
        cambiarIdioma(lang);
    });
});

// Aplicar idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idiomaGuardado);
});

// Función que aplica la traducción a los elementos
function cambiarIdioma(idioma) {
    fetch(`./idiomas/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
            const elementos = document.querySelectorAll('[data-section][data-value]');
            elementos.forEach(el => {
                const seccion = el.getAttribute('data-section');
                const valor = el.getAttribute('data-value');
                const traduccion = data[seccion]?.[valor];

                if (traduccion) {
                    // Si es un placeholder, usar setAttribute
                    if (el.placeholder !== undefined) {
                        el.setAttribute("placeholder", traduccion);
                    } else {
                        el.textContent = traduccion;
                    }
                }
            });
            // Cambiar el atributo lang del <html>
            document.documentElement.setAttribute("lang", idioma);
        })
        .catch(error => console.error('Error al cargar el idioma:', error));
}
document.querySelectorAll(".nombre-producto").forEach((el) => {
    const seccion = el.dataset.section;
    const valor = el.dataset.value;
    const traduccion = data[seccion]?.[valor];
    if (traduccion) {
        el.textContent = traduccion;
    }
});