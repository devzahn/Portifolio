


function escrevendoLetra(){
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
}
escrevendoLetra()


const ativaMenu = document.querySelector('.fa-bars');
const navMenu  = document.querySelector('header .navegacao-navbar')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})


function aboutMe () {

    const divExperience = document.querySelectorAll('.experience-content div');
    const liExperience = document.querySelectorAll('.experience-content ul li');
    const divEducation = document.querySelectorAll('.education-content div');
    const liEducation = document.querySelectorAll('.education-content ul li');

    divExperience[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liExperience[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index){
        divExperience.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperience.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperience[index].classList.add('ativo');
        liExperience[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }

    liExperience.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index);
        });
    });

    liEducation.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index);
        });
    });

}
aboutMe();


const listaAll = document.querySelectorAll('.projects-data ul li');
const buttonGeral = document.querySelectorAll('.projects-models ul li');
const buttonAll = document.querySelectorAll('.projects-models .all');

function removeClick(index) {
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item,index)=>{
    item.addEventListener('click', () =>{
        removeClick(index);
    })
})


function showLista(lista, button = "all") {
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if(button == 'in-progress') {
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
    if(button == 'finished') {
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        lista[8].classList.add('ativo');
    }
    if(button == 'all') {
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        lista[8].classList.add('ativo');

    }
}


buttonGeral.forEach((item) =>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')) {
            showLista(listaAll);
        }
        if(currentButton.classList.contains('all')) {
            showLista(listaAll, "all");
        }
        if(currentButton.classList.contains('in-progress')) {
            showLista(listaAll, "in-progress");
        }
        if(currentButton.classList.contains('finished')) {
            showLista(listaAll, "finished");
        }
    })
})