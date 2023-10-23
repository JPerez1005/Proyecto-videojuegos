const registro=document.getElementById('registro'),
salir=document.getElementById('salir');

salir.addEventListener('click',()=>{
    window.location.href = 'diseign2.html';
})

function abrirModal(){
    const wrapper=document.querySelector('.wrapper'),
    clienteLink=document.querySelector('.cliente-link'),
    gameLink=document.querySelector('.game-link'),
    btnPopup=document.querySelector('.btnIncripcion'),
    iconClose=document.querySelector('.icon-close');

    gameLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });
    clienteLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });
    iconClose.addEventListener('click', ()=>{
        wrapper.classList.remove('active-popup')
    });
}

abrirModal();

window.addEventListener('scroll', function() {
    // Obtén la cantidad de desplazamiento vertical actual
    const scrollY = window.scrollY;

    // Define la cantidad de desplazamiento (en `vh`) en la que deseas cambiar el color
    const scrollThresholdInVh = 50; // Cambia esto según tus necesidades

    // Calcula la cantidad de desplazamiento en píxeles equivalente a `scrollThresholdInVh`
    const scrollThresholdInPixels = scrollThresholdInVh * window.innerHeight / 100;

    // Verifica si se ha superado el umbral de desplazamiento
    if (scrollY >= scrollThresholdInPixels) {
        // Cambia el color del elemento aquí
        const elemento = document.getElementById('wrapper');
        elemento.style.backgroundColor = '#dfe1d5';
    } else {
        // Si se vuelve a desplazar arriba del umbral, puedes restaurar el color original si es necesario
        const elemento = document.getElementById('wrapper');
        elemento.style.backgroundColor = 'transparent'; // Reemplaza 'colorOriginal' con el color original
    }
});
