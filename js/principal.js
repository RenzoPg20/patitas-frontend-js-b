window.addEventListener('load', function(){

    // referenciar controles de pantalla
    const msgSuccess = this.document.getElementById('msgSuccess');

    // recuperar nombre de usuario
    const result = JSON.parse(this.localStorage.getItem('result'));

    // mostrar nombre de usuario en alerta
    mostrarAlerta(`Bienvenido ${result.nombreUsuario}`);

});

function mostrarAlerta(mensaje) {
    msgSuccess.innerHTML = mensaje;
    msgSuccess.style.display = 'block';
}





// Selecciona el botón de cerrar sesión por su id
const btncerrar = document.getElementById('btncerrar');

// Agrega el evento de click al botón
btncerrar.addEventListener('click', function() {

    // Aquí puedes agregar cualquier lógica de validación si es necesario

    // Redirigir al index.html
    window.location.href = '/index.html'; // Asegúrate de que la ruta sea correcta
});

