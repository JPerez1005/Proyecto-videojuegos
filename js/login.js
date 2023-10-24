const login=document.getElementById('login');
let log=false;

login.addEventListener('click',()=>{
    let password=document.getElementById('password').value,
    user=document.getElementById('user').value;

    if (password=='JDPerez1005' && user=='Julian') {
        log=true;
        window.location.href = '../view/gestiones.html';
    } else {
        alert('Datos Incorrectos');
    }
})

function abrirModal(){
    const wrapper=document.querySelector('.wrapper'),
    btnPopup=document.querySelector('.btnLogin-popup'),
    iconClose=document.querySelector('.icon-close');

    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });
    iconClose.addEventListener('click', ()=>{
        wrapper.classList.remove('active-popup')
    });
}

abrirModal();