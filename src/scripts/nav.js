const headerOffset = 80;
const toggleButton = document.querySelector('.header__nav-toggle');
const navMenu = document.querySelector('.header__nav');
const links = document.querySelectorAll('a.scroll-link');

toggleButton.addEventListener('click', function(e) {
  e.preventDefault();
  navMenu.classList.toggle('is-open');
});

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    navMenu.classList.toggle('is-open');
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
      window.scroll({
        top: offsetPosition + window.scrollY,
        behavior: "smooth",
      });
    }
  });
});




