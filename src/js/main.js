const containerCards = document.querySelector('.card-container');
const frontCard = document.querySelector('.front-card');
const backCard = document.querySelector('.back-card');

let proyectos = []
const tecnologies = [{name: 'JavaScript icon', image: 'https://img.icons8.com/?size=50&id=39854&format=png'}, {name: 'Html icon', image: 'https://img.icons8.com/?size=50&id=7hA5Ny9rDAmV&format=png'}, {name: 'CSS icon', image: 'https://img.icons8.com/?size=50&id=38272&format=png'}];

function PROYECTO(name, description, urlCode, urlPreview, photoOfproyect, arrayTech){
    this.name = name,
    this.description = description,
    this.urlCode = urlCode,
    this.urlPreview = urlPreview,
    this.photoOfproyect = photoOfproyect,
    this.arrayTech = arrayTech
}
//My proyects
let passwGenerator = new PROYECTO('Password Generator', 'Este proyecto es un generador de contraseñas en Python que permite a los usuarios crear contraseñas seguras con diferentes combinaciones de letras minúsculas, mayúsculas, números y símbolos.', 'https://github.com/cgalean0/Password_Generator', 'https://github.com/cgalean0/Password_Generator', 'https://previews.dropbox.com/p/thumb/ACM2yJF6uT2swzw1EuTGND4YLeik8JUS_chRGlFZR_iBGIOqA4abin7Kor4C2WgxZLC0ugPjXc0LJNFePUriR5n0_S6WnSKY_CFLTn5w42BdX4fTumkEKVaMN6j8SpAU3YbHWBuLB7oMUYSWahCMKDhH3Ems3OTX2Yr6cif8oAyJ46Lxh1jMAFuWJ2zQmTCP0rUsS0aF2whjXnYbhov-t8ZdRSXo1tnY02e4Qc9jkpX-uQa-UYXuaTRgdLUYsrwMsVUwIEWVB3ZCyExJPqQwtBHDjwRS4izRiYZdUyxyaQm8xlxQQ6NMEmYOTEPSnYqN1TT2UqXrKChLYjhDERVSx_lM/p.png', tecnologies[0].image, tecnologies[1].image, tecnologies[2].image);

let yardSale = new PROYECTO('E-comerce','Participacion en un proyecto código abierto, echo de la mano de un curso de Platzi, donde aprendi a utilizar mucho JavaScript.', 'https://github.com/cgalean0/curso-frontend-developer-js-practico', 'https://github.com/cgalean0/curso-frontend-developer-js-practico', 'https://previews.dropbox.com/p/thumb/ACMKW5hMwGWjh6I0wOgrP6tpTUcI6nKJnLIOUOogzfqfaDgq9ZnlDd0WPFMH0YTiv3-hiQ-bIz6HQtAxec_6vunWTFhnY1OxUN9kpHdOMg2qrHsTmY4F7r_RhrwGPowKx2JUL8yh_CrNqwEAjdz9OrTNHRBKlF8UUWUb46-FUeDR_JDsT9QNk8ovXrcslndX5JlNLyHR_lCRIhNACMxRzUlL1n1XDALImAXXxFCYgolFsmCLNOmz9G5jWCxAJ5JV1VRT9IZqSfAlJLhI2JglnCtREU5eFuTjsepT2N_peR8bZ1Opwvu2dBbR0qV2kv_IRn-tzOLOwKwzygyvKDDwZ-xB/p.png', tecnologies[0].image, tecnologies[1].image, tecnologies[2].image)

//send to array proyectos
proyectos.push(passwGenerator, yardSale);


//function to make dinamic cards on document HTML;
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
        let containerImage = document.createElement('div');
        containerImage.setAttribute('class', 'container-image-front');
        let containerInfo = document.createElement('div');
        containerInfo.setAttribute('class', 'info-container-card');
        let titleOfProeyct = document.createElement('h3');
        titleOfProeyct.textContent = proyectos[i].name
        let divTecnologies = document.createElement('div');
        divTecnologies.setAttribute('class', 'cont-tecnologies');
        //Crear for para las tecnologias.
        
        let imageOne = document.createElement('img');
        imageOne.setAttribute('class', 'icon-card');
        imageOne.setAttribute('src', tecnologies[0].image);
        let imageTwo = document.createElement('img');
        imageTwo.setAttribute('class', 'icon-card');
        imageTwo.setAttribute('src', tecnologies[1].image);
        let imageThree = document.createElement('img');
        imageThree.setAttribute('class', 'icon-card');
        imageThree.setAttribute('src', tecnologies[2].image);

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
        divTecnologies.append(imageOne, imageTwo, imageThree)
        containerInfo.append(titleOfProeyct, divTecnologies)
        backCardContainer.append(cardDescription, buttonContainerBack)
        containerImage.appendChild(imageFront);
        frontCardContainer.append(containerImage, containerInfo, buttonContainer);
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
