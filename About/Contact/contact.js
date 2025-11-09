
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
    });
  });

const contact = document.querySelector('.btn-contact');
  const oval = document.querySelector('.rotating-oval');
 const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;
   const footerTop = footer.offsetTop;
  const scrollY = window.scrollY;

  // Rotate horizontally
  const rotation = scrollY / 2;
  oval.style.transform = `rotateY(${rotation}deg)`; 

  if (scrollY > heroHeight - 50 && scrollY < footerTop - 100) {
    contact.style.backgroundColor = 'black';
    contact.style.color = 'white';
    oval.style.border = '8px solid black';
  }
   else if (scrollY >= footerTop - 100) {
    contact.style.backgroundColor = 'white';
    contact.style.color = 'black';
    
    oval.style.border = '8px solid white';
  }  else {
    contact.style.backgroundColor = 'white';
    contact.style.color = 'black';
    
    oval.style.border = '8px solid white';
  }
});



