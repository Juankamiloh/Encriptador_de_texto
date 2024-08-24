const textArea = document.querySelector(".area_texto");
const mensaje = document.querySelector(".mensaje");
const mensajeError = document.getElementById('mensaje-error');
const botonCopiar = document.querySelector(".copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    if (validarTexto(textArea.value)) {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    mensajeError.classList.add('oculto'); 
    } else {
        mensajeError.classList.remove('oculto'); 
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase() //Convertir en minuscula

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    } 
    return stringEncriptada
}

function btnDesencriptar() {
    if (validarTexto(textArea.value)) {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
        mensajeError.classList.add('oculto'); 
    } else {
        mensajeError.classList.remove('oculto'); 
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase() //Convertir en minuscula

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    } 
    return stringDesencriptada
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; //permite solo letras minúsculas y espacios
    return regex.test(texto); // Devuelve true si el texto cumple con el regex, false si contiene caracteres no permitidos
}

function copiarTexto() {
    const texto = mensaje.value;
    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarNotificacion();
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
function mostrarNotificacion() {
    const notificacion = document.getElementById('notificacion');
    notificacion.classList.remove('oculto');
    notificacion.classList.add('mostrar');

    // Después de 3 segundos, oculta la notificación
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => {
            notificacion.classList.add('oculto');
        }, 500); // Tiempo para completar la transición
    }, 3000); // La notificación se muestra durante 3 segundos
}


