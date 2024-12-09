function validarFormulario(){
    if(validarFormulario2()){
        alert("Formulario correcto!");
    }else{
        alert("Formulario incorrecto!");
    }
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    // Validar el nombre
    if (nombre.length < 3) {
        mensaje.innerText = "El nombre debe tener al menos 3 caracteres.";
        mensaje.style.color = "red";
        return false; // El formulario es incorrecto, retorna false
    }

    // Validar el email
    if (!email.includes('@') || !email.includes('.')) {
        mensaje.innerText = "El email no es válido.";
        mensaje.style.color = "red";
        return false; // El formulario es incorrecto, retorna false
    }

    // Si todo es correcto
    mensaje.innerText = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
    return true; // El formulario es válido, retorna true
}