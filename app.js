document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector('.btn-rond-menu');
    const nav = document.querySelector('.nav-gauche');
    const allItemNav = document.querySelectorAll('.nav-menu-item');
    const ligne = document.querySelector('.cont-ligne');
    const progressBar = document.getElementById('progress-bar');
    const txtAnim = document.querySelector('.txt-animation');
    const inputFields = document.querySelectorAll('input');
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img-agrandie");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];
    const images = document.querySelectorAll(".cont-img-port img");
  
    /* ---------------- Barre de progression ------------------------------------------*/
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    });
  
    /*--------------------- Gestion menu ------------------------------------------*/
    btnMenu.addEventListener('click', () => {
      ligne.classList.toggle('active');
      nav.classList.toggle('menu-visible');
    });
  
    if (window.matchMedia('(max-width: 1300px)').matches) {
      allItemNav.forEach(item => {
        item.addEventListener('click', () => {
          nav.classList.toggle('menu-visible');
          ligne.classList.toggle('active');
        });
      });
    }
  
    /*----------------------- Type Writer Section présentation -----------------------*/
    new Typewriter(txtAnim, {
      loop: false,
      deleteSpeed: 20
    })
      .pauseFor(1800)
      .changeDelay(20)
      // .typeString('Je suis Jérôme Arnoult')
      .pauseFor(300)
      .typeString('<strong> Développeur Web </strong> !')
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
  
    /*------------- Animation des labels section contact ------------------------------*/
    inputFields.forEach(field => {
      field.addEventListener('input', (e) => {
        e.target.parentNode.classList.toggle('animation', e.target.value !== '');
      });
    });
  
    /* Fenêtre modale des images du portfolio */
    images.forEach(img => {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    });
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  });
  