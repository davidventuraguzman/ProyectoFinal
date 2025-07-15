const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

// Al hacer clic en un idioma
langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = button.dataset.language;
        localStorage.setItem("idioma", lang); // Guardar idioma seleccionado

        cambiarIdioma(lang);

        const idiomaActual = document.getElementById("idioma-actual");
        if (idiomaActual) {
            idiomaActual.textContent = lang.toUpperCase();
        }
    });
});

// Aplicar idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idiomaGuardado);

    const idiomaActual = document.getElementById("idioma-actual");
    if (idiomaActual) {
        idiomaActual.textContent = idiomaGuardado.toUpperCase();
    }
});

// Función que cambia el idioma usando JSON
function cambiarIdioma(idioma) {
    fetch(`./idiomas/${idioma}.json`)
        .then(res => res.json())
        .then(data => {
            const elementos = document.querySelectorAll('[data-section][data-value]');
            elementos.forEach(el => {
                const seccion = el.getAttribute('data-section');
                const valor = el.getAttribute('data-value');
                if (data[seccion] && data[seccion][valor]) {
                    el.textContent = data[seccion][valor];
                }
            });

            // Cambiar el atributo lang del <html>
            document.documentElement.setAttribute("lang", idioma);
        })
        .catch(error => console.error('Error al cargar el idioma:', error));
}



