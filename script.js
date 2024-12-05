const cards = document.querySelectorAll('.card');

gsap.timeline().from(cards, {
  y: 100,
  x: -100,
  borderRadius: '50%',
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: 'power1.inOut',
});
