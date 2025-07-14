const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); 
        const lang = button.dataset.language;

        fetch(`idiomas/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                textsToChange.forEach((el) => {
                    const section = el.dataset.section;
                    const value = el.dataset.value;
                    el.innerHTML = data[section][value];
                });

                const idiomaActual = document.getElementById("idioma-actual");
                if (idiomaActual) {
                    idiomaActual.textContent = lang.toUpperCase(); // "EN" o "ES"
                }
            });
    });
});
