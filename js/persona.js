// Definición de la clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Función para agregar una persona a la lista
function agregarPersona() {
    const nombre = document.getElementById('nameInput').value;
    const edad = document.getElementById('ageInput').value;

    if (nombre && edad) {
        const persona = new Persona(nombre, edad);
        personas.push(persona);
        actualizarLista();
    }
}

// Función para eliminar una persona
function eliminarPersona(index) {
    personas.splice(index, 1);
    actualizarLista();
}

// Función para mostrar un formulario de edición
function editarPersona(index) {
    const persona = personas[index];
    const nombre = prompt('Nuevo nombre:', persona.nombre);
    const edad = prompt('Nueva edad:', persona.edad);

    if (nombre !== null && edad !== null) {
        persona.nombre = nombre;
        persona.edad = edad;
        actualizarLista();
    }
}

// Función para actualizar la lista de personas
function actualizarLista() {
    const personList = document.getElementById('personList');
    personList.innerHTML = '';

    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];

        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => eliminarPersona(i));

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => editarPersona(i));

        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);
        personList.appendChild(listItem);
    }
}

// Array para almacenar las personas
const personas = [];

// Escuchar el envío del formulario y agregar una persona
document.getElementById('personForm').addEventListener('submit', function (e) {
    e.preventDefault();
    agregarPersona();
});


// Inicializar la lista de personas
actualizarLista();