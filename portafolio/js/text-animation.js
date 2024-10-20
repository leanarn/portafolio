var typed = new Typed(".typing",{
    strings:["Desarrollador Web Junior","Técnico en Informática", "Programador full stack", "Estudiante de licenciatura en informática"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// botón de leer mas de la presentación
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreText = document.getElementById('moreText');

    readMoreBtn.addEventListener('click', function() {
        if (moreText.classList.contains('hiddenBtn')) {
            moreText.classList.remove('hiddenBtn');
            readMoreBtn.textContent = "Leer menos";
        } else {
            moreText.classList.add('hiddenBtn');
            readMoreBtn.textContent = "Leer más";
        }
    });
});
