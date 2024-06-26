/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Diseñadores", "Desarrolladores"],
  loop: true,
  typeSpeed: 100, 
  backSpeed: 80,
  backDelay: 2000
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 });

/* -- HEADINGS -- */
sr.reveal('.top-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/* ----- EMAILJS FORM SUBMISSION ----- */
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('button');

  document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      btn.innerHTML = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_iubctnf';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.innerHTML = 'Enviar <i class="uil uil-message"></i>';
          showAlert('¡Tu mensaje ha sido enviado exitosamente!', 'success');
        }, (err) => {
          btn.innerHTML = 'Enviar <i class="uil uil-message"></i>';
          showAlert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.', 'error');
        });
    });
});

// JRedireccionar al hacer clic en el botón de GitHub
document.getElementById('github-btn').addEventListener('click', function() {
  window.location.href = 'https://github.com/DesarrolloABForti';
});

/* ----- CUSTOM ALERT FUNCTION ----- */
function showAlert(message, type) {
  const alertBox = document.createElement('div');
  alertBox.className = `custom-alert ${type}`;
  alertBox.innerHTML = `<span>${message}</span>`;
  
  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.style.opacity = '0';
    setTimeout(() => {
      alertBox.remove();
    }, 300);
  }, 5000);
}

/* ----- CUSTOM ALERT STYLES ----- */
const style = document.createElement('style');
style.innerHTML = `
  .custom-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    color: black;
    border: 1px solid black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    z-index: 1000;
    border-radius: 5px;
    font-size: 16px;
    max-width: 300px;
    transition: opacity 0.3s ease;
  }
  .custom-alert.success {
    border-color: green;
  }
  .custom-alert.error {
    border-color: red;
  }
`;

document.head.appendChild(style);