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

gsap.to('body', {
  duartion: 2,
  backgroundColor: '#C9E6F0',
  delay: 10,
});

gsap.from('.title', {
  duartion: 5,
  delay: 12,
  y: -100,
  opacity: 0,
  stagger: 0.5,
  ease: 'bounce',
});
