
const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// Función para copiar al portapapeles
navigator.clipboard.writeText("Estr")
.then(() => {
  console.log('Contenido copiado al portapapeles');
  /* Resuelto - texto copiado al portapapeles con éxito */
},() => {
  console.error('Error al copiar');
  /* Rechazado - fallo al copiar el texto al portapapeles */
});