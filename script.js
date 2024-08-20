const formulario = document.querySelector(".presentacion_contenido_formulario");
const resultado = document.querySelector(".presentacion_caja_formulario");
const cajaTitulo = document.querySelector(".presentacion_caja_titulo");
const cajaParrafo = document.querySelector(".presentacion_caja_parrafo");
const botonCopiar = document.querySelector(".presentacion_boton_copiar");
const cajaImagen = document.querySelector(".caja_imagen");


document.querySelector('.boton_refrescar').addEventListener('click', function() {location.reload();});

function botonEncriptar(){
    const textoEncriptado = encriptar(formulario.value) 
    resultado.value = textoEncriptado;
    formulario.value = '';
    resultado.style.backgroundImage = 'none';
    cajaTitulo.style.visibility = 'hidden';
    cajaParrafo.style.visibility = 'hidden';
    botonCopiar.style.display = 'block';
    cajaImagen.style.visibility = 'hidden';
}

function encriptar(cadenaEncriptada) {
    let reglasEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase();

    for(let i = 0; i < reglasEncriptacion.length; i++){
        if(cadenaEncriptada.includes(reglasEncriptacion[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(reglasEncriptacion[i][0], reglasEncriptacion[i][1]);
        }
    }
    return cadenaEncriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(formulario.value) 
    resultado.value = textoEncriptado;
    formulario.value = '';
    cajaTitulo.style.visibility = 'hidden';
    cajaParrafo.style.visibility = 'hidden';
    cajaImagen.style.visibility = 'hidden';
}

function desencriptar(cadenaDesencriptada) {
    let reglasEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();

    for(let i = 0; i < reglasEncriptacion.length; i++){
        if(cadenaDesencriptada.includes(reglasEncriptacion[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(reglasEncriptacion[i][1], reglasEncriptacion[i][0]);
        }
    }
    return cadenaDesencriptada;
}

function copiarTexto(){
    const texto = document.querySelector(".presentacion_caja_formulario").value;
    navigator.clipboard.writeText(texto)
    .then(() => {
        alert("El texto ha sido copiado con éxito");
    });
}

function modoNoche(){
    const link = document.querySelector('link[rel="stylesheet"]');
    const modoNoche = link.href.includes('/styles/night.css');
    link.href = modoNoche ? 'styles/day.css' : 'styles/night.css';
}