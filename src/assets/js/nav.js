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

// mobile nav toggle code
const dropdowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    // for (const item of dropdowns) {
    //     const onClick = () => {
    //     item.classList.toggle('cs-active')
    // }
    // item.addEventListener('click', onClick)
    // }

// after scrolling down 100px, add .scroll class to the #cs-navigation
// document.addEventListener('scroll', (e) => { 
//     const scroll = document.documentElement.scrollTop;
//     if(scroll >= 100){
// document.querySelector('#cs-navigation').classList.add('scroll')
//     } else {
//     document.querySelector('#cs-navigation').classList.remove('scroll')
//     }
// });
                            
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
if (window.matchMedia("(min-width: 64rem)").matches) {
  // Desktop: use mouse events with a 350ms delay before closing
  dropDowns.forEach(item => {
     let closeTimer;
     item.addEventListener('mouseenter', () => {
         clearTimeout(closeTimer);
         item.classList.add('cs-active');
     });
     item.addEventListener('mouseleave', () => {
         closeTimer = setTimeout(() => {
            item.classList.remove('cs-active');
         }, 250);
     });
  });
} else {
  // Mobile: toggle dropdown on click
  dropDowns.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('cs-active');
      });
  });
}