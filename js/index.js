'use strict';

// ---------------------SCROLL ANIMATIONS   -----------------------------
const chart = document.querySelectorAll('.about__chart_data>span');
const projectCards = document.querySelectorAll('.projects__card');

const displayAnimations = (entries, observer)=>{
    entries.forEach((entrie, i)=>{
        if(entrie.isIntersecting){
            entrie.target.classList.add('animate-me')
            console.log(entrie)
        }
    })    
}

let observer = new IntersectionObserver(displayAnimations, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,     
})


chart.forEach(bar=>{
    observer.observe(bar)
})
projectCards.forEach(bar=>{
    observer.observe(bar)
})

// ---------------------AUTO SCROLL-----------------------------
            //sections
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");

            // buttona
let hero_btn = document.getElementById("hero__button");
let about_menu_btn = document.getElementById("menu__item_about");
let projects_menu_btn = document.getElementById("menu__item_projects");
let contact_menu_btn = document.getElementById("menu__item_contact");


hero_btn.addEventListener("click", ()=>scroll(about));
about_menu_btn.addEventListener("click", ()=>scroll(about));
projects_menu_btn.addEventListener("click", ()=>scroll(projects));
contact_menu_btn.addEventListener("click", ()=>scroll(contact));

function scroll(element){
    element.scrollIntoView({behavior: 'smooth'});
}



// generate projects 
class Project{
    constructor(title, image, desc, tegnologies, link){
        this.title = title;
        this.image = image;
        this.desc = desc;
        this.tegnologies = tegnologies;
        this.link = link;
    }

    getTemplate(){
        // <img src="${this.image}" alt="">
        const projectTemplate = `
        <div class="projects__card">
                        <h3>${this.title}</h3>
                        <p>${this.desc}</p>
                        <p>${this.tegnologies} </p>
                        <button ><a href="${this.link}" target="/blank"> View Project </a></button>
                    </div>
        `
        return projectTemplate;
    }
}

const projectsInfo = [
    new Project('librería 3D', './assets/icons/restaurant-icon.svg', 'Biblioteca virtual con libros sobre tegnología IT.m Animaciones en 3D', 'ReactJS, material UI', 'https://nifty-hawking-0dda3a.netlify.app'),
    new Project('Geritch Restaurant Landing Page', './assets/icons/restaurant-icon.svg', 'Ejemplo de landing page para restaurante d comida alemana', 'ReactJS', 'https://jorgezerpa.github.io/geritch-restaurant-REACT/'),
    new Project('Arcade Shoting game', './assets/icons/restaurant-icon.svg', 'Videojuego clasico al estilo de space invaders.', 'js, canvasJS', 'https://jorgezerpa.github.io/basic-shoting-game/'),
    new Project('app de Video-chat', './assets/icons/restaurant-icon.svg', 'Solo necesitas enviar tu ID a un amigo, y comenzar la llamada.', 'React, node, webSockets', 'https://venerable-dasik-0c5c7a.netlify.app/'),
    new Project('Predictor de altura de objetos con cámara del celular', './assets/icons/restaurant-icon.svg', 'Estimado de la altura de un objeto utilizando trigonometría básica.<br> Coloca la línea guia a nivel del suelo con el teléfono perpendicular a este, y luego inclinalo hacia arriba hasta que la línea este a la altura del objeto.', 'js, canvas', 'https://jorgezerpa.github.io/height-predictor-JS/'),
    new Project('CSS/Canvas art', './assets/icons/restaurant-icon.svg', 'Dibujos y animaciones realizados con código <3', 'html, css, canvasJS', 'https://codepen.io/zerpa_coder'),
    
    new Project('página web para estudio digital', './assets/icons/restaurant-icon.svg', 'ejemplo de una página web', 'html, css, bootstrap', 'https://jorgezerpa.github.io/agency-landing-page/'),
    new Project('página web para una app', './assets/icons/restaurant-icon.svg', 'ejemplo de una página de ventas', 'html, css, bootstrap', 'https://jorgezerpa.github.io/app-landing-page/'),
    new Project('portafolio personal para un diseñador', './assets/icons/restaurant-icon.svg', 'ejemplo de una página web', 'html, css, bootstrap', 'https://jorgezerpa.github.io/designer-page/'),
    new Project('landing page para hospital', './assets/icons/restaurant-icon.svg', 'ejemplo de una página web', 'html, css, bootstrap', 'https://jorgezerpa.github.io/hospital-lp/'),
    new Project('landing page para producto de realidad virtual', './assets/icons/restaurant-icon.svg', 'ejemplo de una página web', 'html, css, bootstrap', 'https://jorgezerpa.github.io/vr-landing-page/'),
    new Project('página para cervesería', './assets/icons/restaurant-icon.svg', 'ejemplo de una página web', 'html, css, bootstrap', 'https://jorgezerpa.github.io/beer-home-landing-page/'),
] 

const projectsContainer = document.getElementById('projects');

projectsInfo.forEach(project=>{
    projectsContainer.innerHTML+= project.getTemplate();
})





