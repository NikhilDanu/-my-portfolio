
const scrollContainer = document.querySelector("body");

const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  lerp: 0.08,
  direction: "vertical",
  smartphone: { smooth: true },
  tablet: { smooth: true },
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0, left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

gsap.from(".nav",{
  y:-50,
  opacity:0,
  duration0:0.5,
})

gsap.from("#prot p", {
  opacity: 0,
  y: 40,
  duration: 2,
  scrollTrigger: {
    trigger: "#prot",
    scroller: "body",
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
    scroller: "body",
    start: "top 80%",
  }
});

gsap.from(".hire button", {
  
  scale: 0.7,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".hire",
    scroller: "body",
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
    scroller: "body",
    start: "top 80%",
  }
});
gsap.from(" .me ",{
  opacity:0,
  duration:3,
 
})
gsap.from(" .img1 ",{
  opacity:0,
  duration:3,
 
})
gsap.from(" .img2 ",{
  opacity:0,
  duration:3,
 
})
gsap.from(" .img3 ",{
  opacity:0,
  duration:3,
 
})
gsap.from(".img4",{
  opacity:0,
  duration:3,
 
})

gsap.from(".about-img img", {
  opacity: 0,
  x: -120,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
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
    scroller: "body",
    start: "top 80%",
  }
});

gsap.from(".contact-info", {
  opacity: 0,
  x: -80,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-box",
    scroller: "body",
    start: "top 80%",
  }
});

gsap.from(".contact-form", {
  opacity: 0,
  x: 80,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-box",
    scroller: "body",
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
