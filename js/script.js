document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const progressBars = document.querySelectorAll('.progress-bar');

  const setActiveLink = () => {
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  const animateProgressBars = () => {
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = `${bar.dataset.width}%`;
      }, index * 100);
    });
  };

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    setActiveLink();
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  animateProgressBars();

  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic'
  });
});
