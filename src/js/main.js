const containerCards = document.querySelector('.container-proyects');
let proyectos = []
function PROYECTO(name, description, urlCode, urlPreview, photoOfproyect){
    this.name = name,
    this.description = description,
    this.urlCode = urlCode,
    this.urlPreview = urlPreview,
    this.photoOfproyect = photoOfproyect
}

let passwGenerator = new PROYECTO('Password Generator', 'Este proyecto es un generador de contraseñas en Python que permite a los usuarios crear contraseñas seguras con diferentes combinaciones de letras minúsculas, mayúsculas, números y símbolos.', 'https://github.com/cgalean0/Password_Generator', 'https://github.com/cgalean0/Password_Generator', 'https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg');
let yardSale = new PROYECTO('E-comerce','Participacion en un proyecto código abierto, echo de la mano de un curso de Platzi, donde aprendi a utilizar mucho JavaScript.', 'https://github.com/cgalean0/curso-frontend-developer-js-practico', 'https://github.com/cgalean0/curso-frontend-developer-js-practico', 'https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg')


proyectos.push(passwGenerator, yardSale);

function dinamicProyects(){
    for(let i = 0; i < proyectos.length; i++){
        let containerCardsFlip = document.createElement('div');
    containerCardsFlip.setAttribute('class', 'container-cards-flips');
    //Front Face of card
    let ladoFront = document.createElement('div');
    ladoFront.setAttribute('class', 'lado-front flipi');
    let imageFront = document.createElement('img');
    imageFront.setAttribute('src', proyectos[i].photoOfproyect);
    imageFront.setAttribute('alt', proyectos[i].name);
    let titleOfProyect = document.createElement('h3');
    titleOfProyect.textContent = proyectos[i].name
    let divParaphase = document.createElement('div');
    let paraphaseDescription = document.createElement('p');
    paraphaseDescription.textContent = proyectos[i].description
    //Back face of card
    let ladoBack = document.createElement('div');
    ladoBack.setAttribute('class', 'lado-back flipi');
    let titleOfProyectBack = document.createElement('h3');
    titleOfProyectBack.textContent = proyectos[i].name
    let secondaryTitle = document.createElement('h4');
    secondaryTitle.textContent = 'Description';
    let divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'buttons-proyect');
    let buttonCodigo = document.createElement('button');
    buttonCodigo.textContent = 'Código'
    buttonCodigo.setAttribute('class', 'shadow-button')
    let buttonPreview = document.createElement('button');
    buttonPreview.textContent = 'Preview'
    buttonPreview.setAttribute('class', 'shadow-button')

    divButtons.append(buttonCodigo, buttonPreview);
    ladoBack.append(titleOfProyectBack, secondaryTitle, divParaphase, divButtons)
    divParaphase.appendChild(paraphaseDescription);
    ladoFront.append(imageFront, titleOfProyect)
    containerCardsFlip.append(ladoFront, ladoBack);
    containerCards.appendChild(containerCardsFlip);
    }
}
dinamicProyects()