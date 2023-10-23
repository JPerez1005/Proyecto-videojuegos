import {mostrarJuegos,registrarCliente,registrarVideojuego,buscar,modificarCliente,modificarVideojuego,d,listaVideojuegos} from './clientes.js';


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

inputJuegos.addEventListener("keyup",() => {
    let juegoBuscado = inputJuegos.value.toLowerCase();
    listaPokemon.innerHTML = "";
    for (let juego of juegos){
        let nombrePoke = juego.name
        if (nombrePoke.indexOf(juegoBuscado) !== -1){
            mostrarPokemon(juego)
        }else if(juegoBuscado==' '){
            alert('madure')
        }
    }
})