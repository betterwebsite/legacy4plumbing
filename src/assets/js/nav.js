// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

const dropdowns = document.querySelectorAll('.cs-dropdown');

dropdowns.forEach(dropdown => {
  let timer;
  const keepOpen = () => {
    clearTimeout(timer);
    dropdown.classList.add('cs-active');
  };

  const scheduleClose = () => {
    timer = setTimeout(() => {
      dropdown.classList.remove('cs-active');
    }, 350);
  };

  // When the mouse enters or moves within the container, keep it open.
  dropdown.addEventListener('mouseenter', keepOpen);
  dropdown.addEventListener('mousemove', keepOpen);
  
  // When the mouse leaves the container, start the timer to close.
  dropdown.addEventListener('mouseleave', scheduleClose);
});


// after scrolling down 100px, add .scroll class to the #cs-navigation
document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('#cs-navigation').classList.add('scroll')
    } else {
    document.querySelector('#cs-navigation').classList.remove('scroll')
    }
});
                            