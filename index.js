// ================= Normal GSAP Setup (NO LOCOMOTIVE) ===================

// Just refresh triggers normally
ScrollTrigger.refresh();


// ================= Animations ===================

gsap.from(".nav",{
  y:-50,
  opacity:0,
  duration:0.5,
})

gsap.from("#prot p", {
  opacity: 0,
  y: 40,
  duration: 2,
  scrollTrigger: {
    trigger: "#prot",
    start: "top 80%",
  }
});

gsap.from("#prot h1, #prot h2, #prot h3", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#prot",
    start: "top 80%",
  }
});

gsap.from(".hire button", {
  scale: 0.7,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".hire",
    start: "top 80%",
  }
});

gsap.from(".social-link ", {
  opacity: 0,
  y: 100,
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".social-link",
    start: "top 80%",
  }
});

gsap.from(".me",{ opacity:0, duration:3 })
gsap.from(".img1",{ opacity:0, duration:3 })
gsap.from(".img2",{ opacity:0, duration:3 })
gsap.from(".img3",{ opacity:0, duration:3 })
gsap.from(".img4",{ opacity:0, duration:3 })

gsap.from(".about-img img", {
  opacity: 0,
  x: -120,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  }
});

gsap.from(".about-content h1, .about-content p", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  }
});

gsap.from("#skills h1, #skills .intro", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  }
});

gsap.from(".skills-grid", {
  opacity: 0,
  x:-100,
  stagger: 0.1,
  duration: 2,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  }
});

gsap.from(".timeline-item", {
  opacity: 0,
  x: (i) => (i % 2 === 0 ? -100 : 100),
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
  }
});

gsap.from("#contact h1, .contact-intro", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
  }
});

gsap.from(".contact-info", {
  opacity: 0,
  x: -80,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-box",
    start: "top 80%",
  }
});

gsap.from(".contact-form", {
  opacity: 0,
  x: 80,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-box",
    start: "top 80%",
  }
});


// Hover Animations ==========================

document.querySelectorAll(".nav ul li").forEach((li) => {
  li.addEventListener("mouseenter", () =>
    gsap.to(li, { y: -4, duration: 0.3 })
  );
  li.addEventListener("mouseleave", () =>
    gsap.to(li, { y: 0, duration: 0.3 })
  );
});

document.querySelectorAll(".btn, .me, .msg").forEach((btn) => {
  btn.addEventListener("mouseenter", () =>
    gsap.to(btn, { scale: 1.07, duration: 0.3 })
  );
  btn.addEventListener("mouseleave", () =>
    gsap.to(btn, { scale: 1, duration: 0.3 })
  );
});
