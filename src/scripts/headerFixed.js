const header = document.querySelector('header');
const section = document.querySelector('section:nth-of-type(2)');
const headerHeight = header.offsetHeight + 50;
let isHeaderFixed = false;

function toggleHeader() {

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


toggleHeader();

window.addEventListener('resize', toggleHeader);

window.addEventListener('scroll', toggleHeader);
