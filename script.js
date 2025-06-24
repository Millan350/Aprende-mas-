document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensajeExito").classList.remove("hidden");
    document.getElementById("contactForm").reset();
});
