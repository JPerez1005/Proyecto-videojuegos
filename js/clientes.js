// Auxiliares
const d = document;
let idVideojuego = 0;
let contJuegos = document.getElementById('app');
// Listas
let listaClientes = JSON.parse(localStorage.getItem('clientes')) || [];
let listaVideojuegos = JSON.parse(localStorage.getItem('videojuegos')) || [];
// botones
/* const registrarCliente = d.getElementById('registrarCliente'),
    modificarCliente = d.getElementById('modificarCliente'),
    modificarVideojuego = d.getElementById('modificarVideojuego'),
    registrarVideojuego = d.getElementById('registrarVideojuego'),
    buscar=d.getElementById('buscar'); */
// Componentes
const tablaClientes = d.getElementById('tablaClientes');
// mostrar datos
d.addEventListener("DOMContentLoaded",()=> {
    if (listaVideojuegos) {
        mostrarJuegos();
    }
});
// Clases
class Cliente {
    constructor(id, nombres, apellidos, telefono, correo, edad, nacionalidad, videojuegos,puntos=0) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.correo = correo;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.videojuegos = videojuegos || [];
        this.puntos= puntos;
    }


    static agregarCliente(listaDeClientes, id, nombres, apellidos, telefono, correo, edad, nacionalidad) {
        const nuevoCliente = new Cliente(id, nombres, apellidos, telefono, correo, edad, nacionalidad);
        listaDeClientes.push(nuevoCliente);
        localStorage.setItem('clientes', JSON.stringify(listaDeClientes));
    }

    static eliminarCliente(listaClientes, id) {
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (cliente.id === id) {
                listaClientes.splice(i, 1);
                localStorage.setItem('clientes', JSON.stringify(listaClientes));
                alert('Cliente eliminado correctamente');
                break;
            }
        }
    }

    static modificarCliente(listaClientes, id, nombres, apellidos, telefono, correo, edad, nacionalidad) {
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (cliente.id === id) {
                cliente.nombres = nombres;
                cliente.apellidos = apellidos;
                cliente.telefono = telefono;
                cliente.correo = correo;
                cliente.edad = edad;
                cliente.nacionalidad = nacionalidad;
                localStorage.setItem('clientes', JSON.stringify(listaClientes));
                alert('modificado Correctamente');
                break;
            }
        }
    }

    static comprarJuego(juego) {
        let idUser = prompt('Digite el id del usuario que va a comprar el juego:');
        console.log(idUser);
        let usuarioEncontrado = false; // Variable para rastrear si se encontró el usuario
    
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (idUser == cliente.id) {
                usuarioEncontrado = true;
                cliente.videojuegos.push(juego);
                let puntosCliente = parseFloat(cliente.puntos);
                let puntosJuego = parseFloat(juego.puntosFidelizacion);

                if (!isNaN(puntosCliente) && !isNaN(puntosJuego)) {
                    cliente.puntos = puntosCliente + puntosJuego;
                    console.log(cliente.puntos);
                } else {
                    alert('Error al sumar puntos: los valores no son numéricos.');
                }
                localStorage.setItem('clientes', JSON.stringify(listaClientes));
            }
        }
    
        if (!usuarioEncontrado) {
            alert('No se encontró el usuario');
        }
    }
}

class Videojuego {
    constructor(id, nombre, tematica, valorLicencia, puntosFidelizacion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.tematica = tematica;
        this.valorLicencia = valorLicencia;
        this.puntosFidelizacion = puntosFidelizacion;
        this.imagen = imagen;
    }

    static agregarVideojuego(listaVideojuegos, id, nombre, tematica, valorLicencia, puntosFidelizacion, imagen) {
        const nuevoVideojuego = new Videojuego(id, nombre, tematica, valorLicencia, puntosFidelizacion, imagen);
        listaVideojuegos.push(nuevoVideojuego);
        localStorage.setItem('videojuegos', JSON.stringify(listaVideojuegos));
    }

    static modificarVideojuego(listaVideojuegos, nombre, tematica, valorLicencia, puntosFidelizacion, imagen) {
        for (let i = 0; i < listaVideojuegos.length; i++) {
            const videojuego = listaVideojuegos[i];
            if (videojuego.nombre === nombre) {
                videojuego.tematica = tematica;
                videojuego.valorLicencia = valorLicencia;
                videojuego.puntosFidelizacion = puntosFidelizacion;
                videojuego.imagen = imagen;
                localStorage.setItem('videojuegos', JSON.stringify(listaVideojuegos));
                alert('modificado Correctamente');
                break;
            }
        }
    }

    static eliminarVideojuego(juego){
        for (let i = 0; i < listaVideojuegos.length; i++) {
            const videojuego = listaVideojuegos[i];
            if (videojuego.id === juego) {
                listaVideojuegos.splice(i, 1);
                localStorage.setItem('videojuegos', JSON.stringify(listaVideojuegos));
                alert('Videojuego eliminado correctamente');
                break;
            }
        }
    }
}

/* registrarCliente.addEventListener('click', () => {
    let id = d.getElementById('id').value,
    nombre = d.getElementById('nombre').value,
    apellido = d.getElementById('apellido').value,
    telefono = d.getElementById('telefono').value,
    correo = d.getElementById('correo').value,
    edad = d.getElementById('edad').value,
    nacionalidad = d.getElementById('nacionalidad').value;
    if (id, nombre, apellido, telefono, correo, edad, nacionalidad) {
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (cliente.id === id) {
                return alert('Ese id ya existe');
            }
        }
        if (edad < 18) {
            return alert('El cliente no tiene la edad necesaria...');
        }
        Cliente.agregarCliente(listaClientes, id, nombre, apellido, telefono, correo, edad, nacionalidad);
        d.getElementById('id').value = '';
        d.getElementById('nombre').value = '';
        d.getElementById('apellido').value = '';
        d.getElementById('telefono').value = '';
        d.getElementById('correo').value = '';
        d.getElementById('edad').value = '';
        d.getElementById('nacionalidad').value = '';
        alert('datos agregados correctamente...');
        console.log(listaClientes);
    } else {
        alert('Complete todos los datos');
    }
}); */

function registrarCliente()
{
    let id = d.getElementById('id').value,
    nombre = d.getElementById('nombre').value,
    apellido = d.getElementById('apellido').value,
    telefono = d.getElementById('telefono').value,
    correo = d.getElementById('correo').value,
    edad = d.getElementById('edad').value,
    nacionalidad = d.getElementById('nacionalidad').value;
    if (id, nombre, apellido, telefono, correo, edad, nacionalidad) {
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (cliente.id === id) {
                return alert('Ese id ya existe');
            }
        }
        if (edad < 18) {
            return alert('El cliente no tiene la edad necesaria...');
        }
        Cliente.agregarCliente(listaClientes, id, nombre, apellido, telefono, correo, edad, nacionalidad);
        d.getElementById('id').value = '';
        d.getElementById('nombre').value = '';
        d.getElementById('apellido').value = '';
        d.getElementById('telefono').value = '';
        d.getElementById('correo').value = '';
        d.getElementById('edad').value = '';
        d.getElementById('nacionalidad').value = '';
        alert('datos agregados correctamente...');
        console.log(listaClientes);
    } else {
        alert('Complete todos los datos');
    }
}

/* registrarVideojuego.addEventListener('click', () => {
    idVideojuego++;
    nombreJuego = d.getElementById('nombreJuego').value;
    tematica = d.getElementById('tematica').value;
    valor = d.getElementById('valor').value;
    puntos = d.getElementById('puntos').value;
    imagen = d.getElementById('imagen').value;

    if (nombreJuego, tematica, valor, puntos, imagen) {
        Videojuego.agregarVideojuego(listaVideojuegos, idVideojuego, nombreJuego, tematica, valor, puntos, imagen);
        console.log(listaVideojuegos);
        alert('Datos agregados correctamente...');
        d.getElementById('nombreJuego').value = '';
        d.getElementById('tematica').value = '';
        d.getElementById('valor').value = '';
        d.getElementById('puntos').value = '';
        d.getElementById('imagen').value = '';
        mostrarJuegos();
    } else {
        alert('Complete todos los datos...');
    }
}); */

function registrarVideojuego()
{
    idVideojuego++;
    let nombreJuego = d.getElementById('nombreJuego').value,
    tematica = d.getElementById('tematica').value,
    valor = d.getElementById('valor').value,
    puntos = d.getElementById('puntos').value,
    imagen = d.getElementById('imagen').value;

    if (nombreJuego, tematica, valor, puntos, imagen) {
        Videojuego.agregarVideojuego(listaVideojuegos, idVideojuego, nombreJuego, tematica, valor, puntos, imagen);
        console.log(listaVideojuegos);
        alert('Datos agregados correctamente...');
        d.getElementById('nombreJuego').value = '';
        d.getElementById('tematica').value = '';
        d.getElementById('valor').value = '';
        d.getElementById('puntos').value = '';
        d.getElementById('imagen').value = '';
        mostrarJuegos();
    } else {
        alert('Complete todos los datos...');
    }
}

function mostrarJuegos() {
    

    console.log(listaVideojuegos);
    contJuegos.innerHTML='';
    for (let i = 0; i < listaVideojuegos.length; i++) {
        const videojuego = listaVideojuegos[i];
        let datos = `
        <div class="box">
        <div class="figure">
            <img src="${videojuego.imagen}" alt="">
            <div class="caption">
            <div class="about">
                <h1>${videojuego.nombre}</h1>
                <p>${videojuego.tematica}</p>
                <p>Puntos: ${videojuego.puntosFidelizacion}</p>
                <p>Valor: $${videojuego.valorLicencia}</p>
                <div class="btns-group">
                    <button class="btns" id="btns">Comprar</button>
                    <button class="btnse" id="btns">Eliminar</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        `;
        contJuegos.insertAdjacentHTML('beforeend', datos);
    }

    const botonesCompra = d.querySelectorAll('.btns');
    const botonesEliminar = d.querySelectorAll('.btnse');

    botonesCompra.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Accede a los datos del videojuego en función del índice
            const videojuegoSeleccionado = listaVideojuegos[index];
            // Haz lo que necesites con los datos del videojuego seleccionado
            console.log('Videojuego seleccionado:', videojuegoSeleccionado);
            Cliente.comprarJuego(videojuegoSeleccionado);
        });
    });

    botonesEliminar.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Accede al ID único del videojuego que se va a eliminar
            const idAEliminar = listaVideojuegos[index].id;
            // Llama al método para eliminar el videojuego
            Videojuego.eliminarVideojuego(idAEliminar);
            // Actualiza la vista
            mostrarJuegos();
        });
    });
}

/* buscar.addEventListener('click',()=>{
    let buscarId=d.getElementById('buscarId').value;
    let encontrado=false;
    for (let i = 0; i < listaClientes.length; i++) {
        const cliente = listaClientes[i];
        if (parseFloat(cliente.id) == buscarId) {
            encontrado=true;
            let datos=`
            <h1>${cliente.id}</h1>
            <h2>${cliente.nombres} ${cliente.apellidos}</h2>
            <p>${cliente.telefono}</p>
            <p>Correo: ${cliente.correo}</p>
            <p>Edad: ${cliente.edad}</p>
            <p>Puntos: ${cliente.puntos}</p>
            <h3>${cliente.nacionalidad}</h3>
            <br>
            `
            let datos2,datos3,datos4;
            if(cliente.videojuegos.length>0){
                datos2=`<h3>Juegos Comprados:</h3>
                <ul>`;
                datos3='';
                for (let i = 0; i < cliente.videojuegos.length; i++) {
                    const juego = cliente.videojuegos[i];
                    datos3+=`<li>${juego.nombre}</li>`;
                }
                datos4=`</ul>`
            }
            let datos5=`
            <br>
            <button class="btn" id="eliminarCliente">Eliminar Cliente</button>
            `;
            tablaClientes.style.visibility='visible';
            tablaClientes.innerHTML=datos+datos2+datos3+datos4+datos5;
            break;
        }
    }
    if(encontrado==false)
    {
        alert('no se encontró')
    }
    const eliminarClientes = d.getElementById('eliminarCliente');
    eliminarClientes.addEventListener('click',()=>{
        let buscarId=d.getElementById('buscarId').value;
        Cliente.eliminarCliente(listaClientes,buscarId);
        tablaClientes.style.visibility='hidden';
    });
}); */

function buscar()
{
    let buscarId=d.getElementById('buscarId').value;
    let encontrado=false;
    for (let i = 0; i < listaClientes.length; i++) {
        const cliente = listaClientes[i];
        if (parseFloat(cliente.id) == buscarId) {
            encontrado=true;
            let datos=`
            <h1>${cliente.id}</h1>
            <h2>${cliente.nombres} ${cliente.apellidos}</h2>
            <p>${cliente.telefono}</p>
            <p>Correo: ${cliente.correo}</p>
            <p>Edad: ${cliente.edad}</p>
            <p>Puntos: ${cliente.puntos}</p>
            <h3>${cliente.nacionalidad}</h3>
            <br>
            `
            let datos2,datos3,datos4;
            if(cliente.videojuegos.length>0){
                datos2=`<h3>Juegos Comprados:</h3>
                <ul>`;
                datos3='';
                for (let i = 0; i < cliente.videojuegos.length; i++) {
                    const juego = cliente.videojuegos[i];
                    datos3+=`<li>${juego.nombre}</li>`;
                }
                datos4=`</ul>`
            }
            let datos5=`
            <br>
            <button class="btn" id="eliminarCliente">Eliminar Cliente</button>
            `;
            tablaClientes.style.visibility='visible';
            tablaClientes.innerHTML=datos+datos2+datos3+datos4+datos5;
            break;
        }
    }
    if(encontrado==false)
    {
        alert('no se encontró')
    }
    const eliminarClientes = d.getElementById('eliminarCliente');
    eliminarClientes.addEventListener('click',()=>{
        let buscarId=d.getElementById('buscarId').value;
        Cliente.eliminarCliente(listaClientes,buscarId);
        tablaClientes.style.visibility='hidden';
    });
}

/* modificarCliente.addEventListener('click',()=>{
    let id = d.getElementById('id').value,
    nombre = d.getElementById('nombre').value,
    apellido = d.getElementById('apellido').value,
    telefono = d.getElementById('telefono').value,
    correo = d.getElementById('correo').value,
    edad = d.getElementById('edad').value,
    nacionalidad = d.getElementById('nacionalidad').value;
    let encontrado=false;

    if (id, nombre, apellido, telefono, correo, edad, nacionalidad) {
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (cliente.id === id) {
                encontrado=true;
                if (edad < 18) {
                    return alert('El cliente no tiene la edad necesaria...');
                }
                Cliente.modificarCliente(listaClientes,id,nombre,apellido,telefono,correo,edad,nacionalidad);
                d.getElementById('id').value = '';
                d.getElementById('nombre').value = '';
                d.getElementById('apellido').value = '';
                d.getElementById('telefono').value = '';
                d.getElementById('correo').value = '';
                d.getElementById('edad').value = '';
                d.getElementById('nacionalidad').value = '';
                alert('datos modificados correctamente...');
                console.log(listaClientes);
            }
        }
        if (encontrado==false) {
            alert('No se encontró el usuario');
        }
        
    } else {
        alert('Complete todos los datos');
    }
}) */

function modificarCliente()
{
    let id = d.getElementById('id').value,
    nombre = d.getElementById('nombre').value,
    apellido = d.getElementById('apellido').value,
    telefono = d.getElementById('telefono').value,
    correo = d.getElementById('correo').value,
    edad = d.getElementById('edad').value,
    nacionalidad = d.getElementById('nacionalidad').value;
    let encontrado=false;

    if (id, nombre, apellido, telefono, correo, edad, nacionalidad) {
        for (let i = 0; i < listaClientes.length; i++) {
            const cliente = listaClientes[i];
            if (cliente.id === id) {
                encontrado=true;
                if (edad < 18) {
                    return alert('El cliente no tiene la edad necesaria...');
                }
                Cliente.modificarCliente(listaClientes,id,nombre,apellido,telefono,correo,edad,nacionalidad);
                d.getElementById('id').value = '';
                d.getElementById('nombre').value = '';
                d.getElementById('apellido').value = '';
                d.getElementById('telefono').value = '';
                d.getElementById('correo').value = '';
                d.getElementById('edad').value = '';
                d.getElementById('nacionalidad').value = '';
                alert('datos modificados correctamente...');
                console.log(listaClientes);
            }
        }
        if (encontrado==false) {
            alert('No se encontró el usuario');
        }
        
    } else {
        alert('Complete todos los datos');
    }
}

/* modificarVideojuego.addEventListener('click',()=>{
    let nombreJuego = d.getElementById('nombreJuego').value,
    tematica = d.getElementById('tematica').value,
    valor = d.getElementById('valor').value,
    puntos = d.getElementById('puntos').value,
    imagen = d.getElementById('imagen').value;
    let encontrado=false;

    if (nombreJuego, tematica, valor, puntos, imagen) {
        for (let i = 0; i < listaVideojuegos.length; i++) {
            const videojuego = listaVideojuegos[i];
            if (videojuego.nombre === nombreJuego) {
                encontrado=true;
                Videojuego.modificarVideojuego(listaVideojuegos,nombreJuego,tematica,valor,puntos,imagen);
                d.getElementById('nombreJuego').value = '';
                d.getElementById('tematica').value = '';
                d.getElementById('valor').value = '';
                d.getElementById('puntos').value = '';
                d.getElementById('imagen').value = '';
                mostrarJuegos();
                alert('datos modificados correctamente...');
                console.log(listaVideojuegos);
            }
        }
        if (encontrado==false) {
            alert('No se encontró el videojuego');
        }
        
    } else {
        alert('Complete todos los datos');
    }
}); */

function modificarVideojuego()
{
    let nombreJuego = d.getElementById('nombreJuego').value,
    tematica = d.getElementById('tematica').value,
    valor = d.getElementById('valor').value,
    puntos = d.getElementById('puntos').value,
    imagen = d.getElementById('imagen').value;
    let encontrado=false;

    if (nombreJuego, tematica, valor, puntos, imagen) {
        for (let i = 0; i < listaVideojuegos.length; i++) {
            const videojuego = listaVideojuegos[i];
            if (videojuego.nombre === nombreJuego) {
                encontrado=true;
                Videojuego.modificarVideojuego(listaVideojuegos,nombreJuego,tematica,valor,puntos,imagen);
                d.getElementById('nombreJuego').value = '';
                d.getElementById('tematica').value = '';
                d.getElementById('valor').value = '';
                d.getElementById('puntos').value = '';
                d.getElementById('imagen').value = '';
                mostrarJuegos();
                alert('datos modificados correctamente...');
                console.log(listaVideojuegos);
            }
        }
        if (encontrado==false) {
            alert('No se encontró el videojuego');
        }
        
    } else {
        alert('Complete todos los datos');
    }
}

function buscarJuegos()
{
    console.log(listaVideojuegos);
    let encontrado=false;
    contJuegos.innerHTML='';
    let juegoBuscar=d.getElementById('juegoBuscar').value;
    for (let i = 0; i < listaVideojuegos.length; i++) {
        const videojuego = listaVideojuegos[i];
        if(juegoBuscar==videojuego.nombre)
        {
            encontrado=true;
            let datos = `
            <div class="box">
            <div class="figure">
                <img src="${videojuego.imagen}" alt="">
                <div class="caption">
                <div class="about">
                    <h1>${videojuego.nombre}</h1>
                    <p>${videojuego.tematica}</p>
                    <p>Puntos: ${videojuego.puntosFidelizacion}</p>
                    <p>Valor: $${videojuego.valorLicencia}</p>
                    <div class="btns-group">
                        <button class="btns" id="btns">Comprar</button>
                        <button class="btnse" id="btns">Eliminar</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            `;
            contJuegos.insertAdjacentHTML('beforeend', datos);
        }
    }

    if (encontrado==false) {
        alert('no se encontró')
        mostrarJuegos();
    }

    const botonesCompra = d.querySelectorAll('.btns');
    const botonesEliminar = d.querySelectorAll('.btnse');

    botonesCompra.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Accede a los datos del videojuego en función del índice
            const videojuegoSeleccionado = listaVideojuegos[index];
            // Haz lo que necesites con los datos del videojuego seleccionado
            console.log('Videojuego seleccionado:', videojuegoSeleccionado);
            Cliente.comprarJuego(videojuegoSeleccionado);
        });
    });

    botonesEliminar.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            // Accede al ID único del videojuego que se va a eliminar
            const idAEliminar = listaVideojuegos[index].id;
            // Llama al método para eliminar el videojuego
            Videojuego.eliminarVideojuego(idAEliminar);
            // Actualiza la vista
            mostrarJuegos();
        });
    });
}

export{mostrarJuegos,registrarCliente,registrarVideojuego,buscar,modificarCliente,modificarVideojuego,d,listaVideojuegos,contJuegos,buscarJuegos}