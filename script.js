const cards = document.querySelectorAll('.card');

gsap.timeline().from(cards, {
  y: 100,
  x: -100,
  opacity: 0,
  duration: 2,
  stagger: 0.5, // Stagger applies to all cards collectively
});
