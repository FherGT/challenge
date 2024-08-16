function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Encripta y desencripta mensajes');    
    asignarTextoElemento('p','Ingresa texto en minúsculas y sin caracteres especiales.')
    return;
}

condicionesIniciales();

function encriptar() {

    event.preventDefault();

    let textarea = document.querySelector("textarea");

    let texto = textarea.value;

    let lista = [];

    const mapeo = {
        'e':'enter',
        'i':'imes',
        'a':'ai',
        'o':'ober',
        'u':'ufat',
    }

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];

        if (mapeo[caracter]) {
            lista.push(mapeo[caracter]);
        } else {
            lista.push(caracter);
        }
        
    }

    textarea.value = lista.join('');

}

function desencriptar() {
    event.preventDefault();

    let textarea = document.querySelector("textarea");

    let texto = textarea.value;

    const mapeo = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u',
    };

    let textoModificado = texto;
    let claves = Object.keys(mapeo);
    
    for (const clave of claves) {        
        textoModificado = textoModificado.replaceAll(clave, mapeo[clave]);
    }

    textarea.value = textoModificado;

}