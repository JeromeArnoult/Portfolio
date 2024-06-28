/*TODO : Ajouter la barre de progression au scroll */

/*TODO : Apparation progressive des éléments au démarrage */

/*-------------------------------Déclaration des constantes---------------------------------------------------------*/
const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

/* Gestion menu*/
btnMenu.addEventListener('click',() => {
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
});
/*Pour que les "items" du menu ferme la nav au click */
if(window.matchMedia('(max-width: 1300px')) {
    allItemNav.forEach(item=>{
        item.addEventListener('click',()=>{
            nav.classList.toggle('menu-visible');
            ligne.classList.toggle('active');
        });
    });
};
/*----------------------- Type Writer  -----------------------------------*/ 

const txtAnim = document.querySelector('.txt-animation');

  let typewriter = new Typewriter(txtAnim,  {
    loop: false,
    deleteSpeed: 20
  });

  typewriter 
  .pauseFor(1800)
  .changeDelay(20)
  .typeString('Moi c\'est Jérôme Arnoult')
  .pauseFor(300)
  .typeString('<strong>, Développeur Web </strong> !')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #27ae60;"> CSS</span> !')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: yellow;"> PhP</span> !')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: lightgrey;"> Symfony</span> !')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color: lightgreen;"> JavaScript </span> !')
  .pauseFor(1000)
  .deleteChars(13)
  .typeString('<span style="color: #ff6910;"> Angular</span> !')
  .deleteChars(12)
  .typeString('<span style="color: lightblue;"> Java </span> !')
  .deleteChars(7)
  .typeString('<span style="color: lightblue;"> Web </span> !')
  .start();

  /*----------------------------- Animation des labels section contact-------------------------------------------*/

  const input_fields = document.querySelectorAll('input');

  for(let i = 0; i < input_fields.length; i++) {
    let field = input_fields[i];
    field.addEventListener('input', (e) => {
        if(e.target.value !== '') {
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == '') {
            e.target.parentNode.classList.remove('animation');
        };
    });
  };

  document.addEventListener("DOMContentLoaded", function() {
    // Récupérer l'élément modal
    let modal = document.getElementById("modal");

    // Récupérer l'élément modal-image
    let modalImg = document.getElementById("img-agrandie");
    let captionText = document.getElementById("caption");

    // Récupérer toutes les images cliquables
    let images = document.querySelectorAll(".cont-img-port img");

    // Ajouter un écouteur d'événements pour chaque image
    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // Récupérer l'élément <span> qui ferme le modal
    let span = document.getElementsByClassName("close")[0];

    // Ajouter un écouteur d'événements pour fermer le modal lors du clic sur <span>
    span.onclick = function() {
        modal.style.display = "none";
    }
});