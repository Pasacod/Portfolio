const header = document.querySelector('header');
const section = document.querySelector('section:nth-of-type(2)');
const headerHeight = header.offsetHeight + 50;
let isHeaderFixed = false;

function toggleHeader() {

  /*
  if (window.innerWidth < 600) {
    header.style.opacity = 1;
    if (isHeaderFixed) {
      header.classList.remove('header-fixed');
      isHeaderFixed = false;
    }
    return;
  }
  */

  if (window.pageYOffset >= headerHeight) {
    header.style.opacity = 0;
    if (window.pageYOffset >= section.offsetTop - headerHeight) {
      header.style.opacity = 1;
      if (!isHeaderFixed) {
        header.classList.add('header-fixed');
        isHeaderFixed = true;
      }
    } else {
      header.style.opacity = 0;
      if (isHeaderFixed) {
        setTimeout(function() {
          header.classList.remove('header-fixed');
          isHeaderFixed = false;
        }, 500);
      }
    }
  } else {
    header.style.opacity = 1;
    if (isHeaderFixed) {
      header.classList.remove('header-fixed');
      isHeaderFixed = false;
    }
  }
}

// Appeler la fonction toggleHeader() pour la première fois pour initialiser l'état du header
toggleHeader();

// Ajouter un gestionnaire d'événements resize pour détecter les changements de taille de l'écran
window.addEventListener('resize', toggleHeader);

// Ajouter un gestionnaire d'événements scroll pour mettre à jour l'état du header en fonction de la position de défilement
window.addEventListener('scroll', toggleHeader);
