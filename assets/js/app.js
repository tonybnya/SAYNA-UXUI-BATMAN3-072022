// Scrolling on Side Batman Buttons with jQuery
const log = arg => console.log(arg);

const sections = document.querySelectorAll('section');
// const scrolls = document.querySelector('.scroll-fade-in');

const scrollFadeIn = [
  { transform: 'translateX(-500px) scale(0.1)'},
  { transform: 'translateX(0) scale(1)'}
];

const scrollTiming = {
  duration: 1000,
  scrollEasing: 'easeOut'
}; 

window.addEventListener('scroll', () => {
  sections.forEach(section => { 
    section.animate(scrollFadeIn, scrollTiming);
  });
  // scrolls.forEach(scroll => { 
  //   scroll.animate(scrollFadeIn, scrollTiming);
  // });
});

// Target the two batman arrows on the side scroll buttons
const arrows = document.querySelectorAll('.arrow-bat');
// Target buttons on the hero section
const btns = document.querySelectorAll('#scroll');

// Add an event listener to each batman arrow
arrows.forEach((element) => { 
  // Call the defined smoothScroll function on each element
  element.addEventListener('click', smoothScroll);
});

// Add an event listener to each button link
btns.forEach(element => { 
  // Call the defined smoothScroll function on each element
  element.addEventListener('click', smoothScroll);
});

// Define the function smoothScroll
const smoothScroll = (e) => { 
  // Prevent the default behavior of the element
  e.preventDefault();
  // Get the href attribute of the link clicked
  const link = this.getAttribute('href');
  // Get the position of the target anchor
  const offSetTop = document.querySelector(link).offsetTop;
  // Scroll to the target
  scroll({
    top: offSetTop,
    behavior: 'smooth'
  });
};
