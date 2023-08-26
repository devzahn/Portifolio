

function ativaletras(elemento) {
        const arrTexto = elemento.innerHTML.split('')
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra;
            }, 50 * i)
        })
}

const titulo = document.querySelector('.typing');
ativaletras(titulo); 


const ativaMenu = document.querySelector('.fa-bars');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
})