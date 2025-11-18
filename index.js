// script.js - Locomotive Scroll and GSAP Animations for Premium Feel

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.1, // Adjust for smoothness (lower = smoother but slower)
  direction: 'vertical',
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

// Update ScrollTrigger on Locomotive Scroll updates
locoScroll.on('scroll', ScrollTrigger.update);

// Tell ScrollTrigger to use Locomotive Scroll proxy
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform
    ? 'transform'
    : 'fixed',
});

// Refresh ScrollTrigger after Locomotive Scroll updates
ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();

// GSAP Animations with Premium Feel

// Hero Section Animations
gsap.from('#prot p', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#prot',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('#prot h1', {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#prot',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('#prot h2', {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.4,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#prot',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('#prot h3', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#prot',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.hire button', {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 0.8,
  ease: 'back.out(1.7)',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.hire',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.social-link a', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 1,
  ease: 'power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.social-link',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.me', {
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.me',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.img1, .img2, .img3, .img4', {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: 'back.out(1.7)',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#img',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

// About Section Animations
gsap.from('.about-img img', {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#about',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.about-content h1', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#about',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.about-content p', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '#about',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.about-tags span', {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  delay: 0.4,
  ease: 'back.out(1.7)',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '#about',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

// Skills Section Animations
gsap.from('#skills h1', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#skills',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('#skills .intro', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#skills',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.skill-card', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: 'power2.out',
  stagger: 0.1,
  scrollTrigger: {
    trigger: '.skills-grid',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

// Projects Section Animations
gsap.from('#projects h1', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#projects',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.timeline-item', {
  opacity: 0,
  x: (index) => (index % 2 === 0 ? -100 : 100),
  duration: 1,
  ease: 'power2.out',
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.timeline',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

// Contact Section Animations
gsap.from('#contact h1', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#contact',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.contact-intro', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#contact',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.contact-info', {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.4,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-box',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('.contact-form', {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.4,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.contact-box',
    scroller: '[data-scroll-container]',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
});

// Navigation Hover Animation (Premium Feel)
gsap.set('.nav ul li', { y: 0 });
gsap.to('.nav ul li', {
  y: -5,
  duration: 0.3,
  ease: 'power2.out',
  paused: true,
  onStart: () => gsap.to('.nav ul li', { color: 'orangered', duration: 0.3 }),
  onReverse: () => gsap.to('.nav ul li', { color: 'white', duration: 0.3 }),
});

document.querySelectorAll('.nav ul li').forEach((li) => {
  li.addEventListener('mouseenter', () => gsap.to(li, { y: -5, duration: 0.3, ease: 'power2.out' }));
  li.addEventListener('mouseleave', () => gsap.to(li, { y: 0, duration: 0.3, ease: 'power2.out' }));
});

// Button Hover Animations
gsap.set('.btn, .me, .msg', { scale: 1 });
document.querySelectorAll('.btn, .me, .msg').forEach((btn) => {
  btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' }));
  btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' }));
});

// Social Links Hover
document.querySelectorAll('.social-link a').forEach((link) => {
  link.addEventListener('mouseenter', () => gsap.to(link, { scale: 1.2, duration: 0.3, ease: 'power2.out' }));
  link.addEventListener('mouseleave', () => gsap.to(link, { scale: 1, duration: 0.3, ease: 'power2.out' }));
});