import { mostrarJuegos, registrarCliente, registrarVideojuego, buscar, modificarCliente,
    modificarVideojuego, d, listaVideojuegos, contJuegos, buscarJuegos } from './clientes.js';


const rCliente = d.getElementById('registrarCliente'),
    mCliente = d.getElementById('modificarCliente'),
    mVideojuego = d.getElementById('modificarVideojuego'),
    rVideojuego = d.getElementById('registrarVideojuego'),
    bbuscador = d.getElementById('buscar');
let juegoBuscar = d.getElementById('buscarJuego');
// mostrar datos
d.addEventListener("DOMContentLoaded", () => {
    if (listaVideojuegos) {
        mostrarJuegos();
    }

    rCliente.addEventListener('click', registrarCliente);
    mCliente.addEventListener('click', modificarCliente);
    rVideojuego.addEventListener('click', registrarVideojuego);
    mVideojuego.addEventListener('click', modificarVideojuego);
    bbuscador.addEventListener('click', buscar);
});

juegoBuscar.addEventListener('click', buscarJuegos);