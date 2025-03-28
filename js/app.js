
const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');  // Muestra/oculta la lista
    menuBtn.classList.toggle('active');  // Gira el ícono
});

// Función para copiar al portapapeles
function copyToClipboard(event, text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyMessage();
        })
        .catch((err) => console.error('Error al copiar: ', err));
        event.preventDefault();
}

// Función para mostrar el mensaje de confirmación
function showCopyMessage() {
    const msg = document.getElementById('copy-msg');
    msg.classList.add('show');

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
        msg.classList.remove('show');
    }, 2000);
}
