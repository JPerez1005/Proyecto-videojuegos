import {mostrarJuegos,registrarCliente,registrarVideojuego,buscar,modificarCliente,modificarVideojuego,d,listaVideojuegos,contJuegos} from './clientes.js';


const rCliente = d.getElementById('registrarCliente'),
    mCliente = d.getElementById('modificarCliente'),
    mVideojuego = d.getElementById('modificarVideojuego'),
    rVideojuego = d.getElementById('registrarVideojuego'),
    bbuscador=d.getElementById('buscar');
// mostrar datos
d.addEventListener("DOMContentLoaded",()=> {
    if (listaVideojuegos) {
        mostrarJuegos();
    }

    rCliente.addEventListener('click',registrarCliente);
    mCliente.addEventListener('click',modificarCliente);
    rVideojuego.addEventListener('click',registrarVideojuego);
    mVideojuego.addEventListener('click',modificarVideojuego);
    bbuscador.addEventListener('click',buscar);
});

const inputJuegos = d.getElementById("juegoBuscar");

/* inputJuegos.addEventListener("keyup",() => {
    let juegoBuscado = inputJuegos.value.toLowerCase();//lo que escribio el usuario en minuscula
    contJuegos.innerHTML = "";
    for (let juego of listaVideojuegos){
        let nombreJuego = juego.nombre
        if (nombreJuego.indexOf(juegoBuscado) !== -1){
            mostrarJuegos()
        }else if(juegoBuscado==' '){
            alert('madure')
        }
    }
}); */