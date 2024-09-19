let cantidad = document.getElementById('cantidad'); 
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensaje'); // Para mostrar el mensaje de validación

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor que 8");
        contrasena.value = ''; // No mostrar nada en el campo de contraseña si es menor a 8
        mensaje.textContent = ''; // Limpiar mensaje
        return; // Salir de la función si no cumple la longitud mínima
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }

    contrasena.value = password;

    // Ahora validamos si la contraseña es fuerte o débil
    validarContrasena(password);
}

function limpiarCampo() {
    contrasena.value = '';
    mensaje.textContent = ''; // Limpiar también el mensaje de validación
}

limpiar.addEventListener('click', limpiarCampo);

// Función para validar si la contraseña es fuerte o débil
function validarContrasena(password) {
    let tieneNumero = /\d/.test(password); // Verifica si contiene un número
    let tieneMayuscula = /[A-Z]/.test(password); // Verifica si contiene una letra mayúscula
    let tieneMinuscula = /[a-z]/.test(password); // Verifica si contiene una letra minúscula
    let tieneSimbolo = /[!@#$%^&*()]/.test(password); // Verifica si contiene un símbolo especial

    if (tieneNumero && tieneMayuscula && tieneMinuscula && tieneSimbolo) {
        mensaje.textContent = 'La contraseña es fuerte';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'La contraseña es débil. Debe contener al menos un número, una letra mayúscula, una letra minúscula y un símbolo especial.';
        mensaje.style.color = 'red';
    }
}

boton.addEventListener('click', generar);
