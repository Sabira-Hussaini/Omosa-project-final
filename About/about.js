
  const oval = document.querySelector(".rotating-oval");
  let started = false;
  oval.addEventListener("animationed", () =>{
    oval.classList.add("spin");
  });

  window.addEventListener("scroll", () => {
    if (!started) {
      oval.classList.add("rotate-on-scroll");
      started = true;
    }
  });


const container = document.querySelector('.ellipse-container');
const bead = document.querySelector('.bead');
const buttons = document.querySelectorAll('.ellipse-button');

const a = 520; // half of width
const b = 100; // half of height
const rotation = -10 * Math.PI / 180; // -20 degrees tilt
let angle = 0;

const buttonDistanceFactor = 1.14;
const proximityThreshold = 60;

function update() {
  // original ellipse coordinates
  let x = a * Math.cos(angle * Math.PI / 180);
  let y = b * Math.sin(angle * Math.PI / 180);

  // apply rotation
  const rotatedX = x * Math.cos(rotation) - y * Math.sin(rotation);
  const rotatedY = x * Math.sin(rotation) + y * Math.cos(rotation);

  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;

  // move bead
  bead.style.left = centerX + rotatedX - bead.offsetWidth / 2 + 'px';
  bead.style.top = centerY + rotatedY - bead.offsetHeight / 2 + 'px';

  // button highlight check
  buttons.forEach(btn => {
    const btnAngle = parseFloat(btn.dataset.angle) * Math.PI / 180;
    let bx = a * buttonDistanceFactor * Math.cos(btnAngle);
    let by = b * buttonDistanceFactor * Math.sin(btnAngle);

    const rX = bx * Math.cos(rotation) - by * Math.sin(rotation);
    const rY = bx * Math.sin(rotation) + by * Math.cos(rotation);

    const distance = Math.hypot(rotatedX - rX, rotatedY - rY);
    if (distance < proximityThreshold) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  angle += 1; // speed
  requestAnimationFrame(update);
}

// set button positions
function positionButtons() {
  const centerX = container.clientWidth / 2;
  const centerY = container.clientHeight / 2;

  buttons.forEach(btn => {
    const btnAngle = parseFloat(btn.dataset.angle) * Math.PI / 180;
    let x = a * buttonDistanceFactor * Math.cos(btnAngle);
    let y = b * buttonDistanceFactor * Math.sin(btnAngle);

    const rotatedX = x * Math.cos(rotation) - y * Math.sin(rotation);
    const rotatedY = x * Math.sin(rotation) + y * Math.cos(rotation);

    btn.style.left = centerX + rotatedX - btn.offsetWidth / 2 + 'px';
    btn.style.top = centerY + rotatedY - btn.offsetHeight / 2 + 'px';
  });
}

positionButtons();
update();





  const section3 = document.querySelector('.section-three'); // change this if your section 3 has a different class name

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // 🔄 when you scroll a bit, start spinning
    if (scrollY > 100) {
      oval.classList.add('spin-scroll');
    } else {
      oval.classList.remove('spin-scroll');
    }

    // 🪄 when it passes hero text or images, go behind them
    if (scrollY > 400) {
      oval.classList.add('behind');
    } else {
      oval.classList.remove('behind');
    }

    // 🚫 when it reaches section 3, hide the oval
    if (section3 && scrollY >= section3.offsetTop - 200) {
      oval.classList.add('hide-oval');
    } else {
      oval.classList.remove('hide-oval');
    }
  });


