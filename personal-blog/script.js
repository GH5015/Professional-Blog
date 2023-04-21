document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");
    window.addEventListener("scroll", function() {
      if (window.scrollY > content.offsetTop - window.innerHeight + 300) {
        content.classList.add("animate");
    }
});
    const about = document.querySelector(".about");
    window.addEventListener("scroll", function() {
      if (window.scrollY > about.offsetTop - window.innerHeight + 300) {
        about.classList.add("animate");
      }
  });
});

const link1 = document.getElementById('fotos');

link1.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
  });
});
const link2 = document.getElementById('sobre');

link2.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});
const link3 = document.getElementById('contato');

link3.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
  });
});
