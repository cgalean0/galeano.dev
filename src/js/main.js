const containerCards = document.querySelector('.card-container');
const frontCard = document.querySelector('.front-card');
const backCard = document.querySelector('.back-card');

let proyectos = []
const tecnologies = [{name: 'JavaScript icon', image: 'https://img.icons8.com/?size=50&id=39854&format=png'}, {name: 'Html icon', image: 'https://img.icons8.com/?size=50&id=7hA5Ny9rDAmV&format=png'}, {name: 'CSS icon', image: 'https://img.icons8.com/?size=50&id=38272&format=png'}];

function PROYECTO(name, description, urlCode, urlPreview, photoOfproyect, tec1, tec2, tec3){
    this.name = name,
    this.description = description,
    this.urlCode = urlCode,
    this.urlPreview = urlPreview,
    this.photoOfproyect = photoOfproyect,
    this.tec1 = tec1,
    this.tec2 = tec2,
    this.tec3 = tec3
}

let passwGenerator = new PROYECTO('Password Generator', 'Este proyecto es un generador de contraseñas en Python que permite a los usuarios crear contraseñas seguras con diferentes combinaciones de letras minúsculas, mayúsculas, números y símbolos.', 'https://github.com/cgalean0/Password_Generator', 'https://github.com/cgalean0/Password_Generator', 'https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg', tecnologies[0].image, tecnologies[1].image, tecnologies[2].image);
let yardSale = new PROYECTO('E-comerce','Participacion en un proyecto código abierto, echo de la mano de un curso de Platzi, donde aprendi a utilizar mucho JavaScript.', 'https://github.com/cgalean0/curso-frontend-developer-js-practico', 'https://github.com/cgalean0/curso-frontend-developer-js-practico', 'https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg', tecnologies[0].image, tecnologies[1].image, tecnologies[2].image)


proyectos.push(passwGenerator, yardSale);

function dinamicProyects(){
    for(let i = 0; i < proyectos.length; i++){
        //Front of Cards
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        let frontCardContainer = document.createElement('div');
        frontCardContainer.setAttribute('class', 'front-card');
        let imageFront = document.createElement('img');
        imageFront.setAttribute('src', proyectos[i].photoOfproyect);
        imageFront.setAttribute('class', 'image-proyect');
        imageFront.setAttribute('alt', proyectos[i].name);
        let containerInfo = document.createElement('div');
        containerInfo.setAttribute('class', 'info-container-card');
        let titleOfProeyct = document.createElement('h3');
        titleOfProeyct.textContent = proyectos[i].name
        let divTecnologies = document.createElement('div');
        divTecnologies.setAttribute('class', 'cont-tecnologies');
        //Crear for para las tecnologias.
        let buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'contain-button');
        let buttonFront = document.createElement('button');
        buttonFront.setAttribute('class', 'button-flip');
        buttonFront.textContent = 'Flip'
        //back of cards
        let backCardContainer = document.createElement('div');
        backCardContainer.setAttribute('class', 'back-card');
        let cardDescription = document.createElement('div');
        cardDescription.setAttribute('class', 'card-description');
        let textDescription = document.createElement('h3');
        textDescription.textContent = 'Description';
        let paraphaseCards = document.createElement('p');
        paraphaseCards.textContent = proyectos[i].description;
        let buttonContainerBack = document.createElement('div');
        buttonContainerBack.setAttribute('class', 'contain-button');
        let buttonCode = document.createElement('button');
        buttonCode.textContent = 'Code'
        buttonCode.setAttribute('class', 'code-button');

        //to order tags
        buttonContainerBack.appendChild(buttonCode);
        cardDescription.append(textDescription, paraphaseCards);
        buttonContainer.appendChild(buttonFront)
        containerInfo.append(titleOfProeyct, divTecnologies)
        backCardContainer.append(cardDescription, buttonContainerBack)
        frontCardContainer.append(imageFront, containerInfo, buttonContainer);
        card.append(frontCardContainer, backCardContainer);
        containerCards.appendChild(card);

        buttonFront.addEventListener('click', ()=>{
            if(true){
                frontCardContainer.classList.add('flip-front');
                backCardContainer.classList.add('flip-back');
            }
            setTimeout(() => {
                frontCardContainer.classList.remove('flip-front');
                backCardContainer.classList.remove('flip-back');
            }, 5000);
        })
    }
}
dinamicProyects()