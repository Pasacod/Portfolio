// Récupérer tous les éléments que vous souhaitez faire apparaître
const titles = document.querySelectorAll('h2');
const windows = document.querySelectorAll('.about__content__aside__window, .projects__window, .contact__container');
const illustration = document.querySelectorAll('.about__content__illustration');

// Fonction qui vérifie si un élément est à la même hauteur que la fenêtre
function isElementOnScreen(el) {
  const rect = el.getBoundingClientRect();
  return (rect.top >= 0 && rect.top <= window.innerHeight);
}

function isElementOffWindow(el) {
  const rect = el.getBoundingClientRect();
  return (rect.top > window.innerHeight || rect.bottom < 0);
}



// Fonction qui affiche les éléments s'ils sont à la même hauteur que la fenêtre
function showElements() {
  titles.forEach(el => {
      if (isElementOnScreen(el)) {
        el.style.opacity = 1;
        el.style.top = '0px';
      } else if (isElementOffWindow(el)) {
        el.style.opacity = 0;
        el.style.top = '50px';
      }
  });

  windows.forEach(el => {
    setTimeout(() => {
      if (isElementOnScreen(el)) {
        el.style.opacity = 1;
        el.style.top = '0px';
        el.style.scale = 1;
      } else if (isElementOffWindow(el)) {
        el.style.opacity = 0;
        el.style.scale = 0.5;
        el.style.top = '100px';
      }
    }, 300);
  });

  illustration.forEach(el => {
      if (isElementOnScreen(el)) {
        el.style.opacity = 1;
        el.style.right = '0px';
      }
  });
}

// Ajouter un événement de défilement pour appeler la fonction showElements()
window.addEventListener('scroll', showElements);

// Afficher les éléments qui sont déjà à la même hauteur que la fenêtre lorsque la page se charge
showElements();
