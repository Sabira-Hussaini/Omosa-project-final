const contact = document.querySelector('.btn-contact');
const originalText = 'Contact Us';
let typing;

contact.style.display = 'inline-block';

contact.addEventListener('mouseenter', () => {
  clearInterval(typing);
  contact.textContent = ''; // خالی شود برای تایپ
  let i = 0;

  typing = setInterval(() => {
    contact.textContent += originalText[i];
    i++;
    if (i >= originalText.length) {
      clearInterval(typing);
    }
  }, 40); // سرعت تایپ
});

contact.addEventListener('mouseleave', () => {
  clearInterval(typing);
  contact.textContent = originalText; // برگشت به حالت اول
});
contact.addEventListener('mouseleave', () => {
  clearInterval(typing);
  clearTimeout(loop);
  contact.textContent = originalText;
});


const hero = document.querySelector('.hero-section');

let bgInterval;
const image = [
  'url("images/e.webp")',
  'url("images/f.webp")',
  'url("images/g.jpg")',
  'url("images/h.webp")',
  'url("images/i.webp")',
  'url("images/as.webp")',
  'url("images/a.jpg")',
  'url("images/b.webp")',

]; 

// hero.style.transition = "background-image 0.8s ease-in-out"; // 

hero.addEventListener('mouseenter', () => {
  let index = 0;
  clearInterval(bgInterval);

  bgInterval = setInterval(() => {
    // hero.style.opacity = 0; 
    setTimeout(() => {
      hero.style.backgroundImage = image[index];
      // hero.style.opacity = 1; 
    }, 2000); 

    index = (index + 1) % image.length;
  }, 1500);
});

hero.addEventListener('mouseleave', () => {
  clearInterval(bgInterval);

});





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


