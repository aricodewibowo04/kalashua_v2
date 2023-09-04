gsap.registerPlugin(ScrollTrigger);

gsap.from(".content h1", 1.3, {
    opacity: 0,
    y: 70
});
gsap.from('.row_services .card', 1.2, {
    opacity: 0,
    y:80,
});

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".card",
//         pin: true, 
//         start: "top top",
//         end: "+=500",
//         scrub: 1,
//         snap: {
//             snapTo: "labels",
//             duration: {min:0.2, max: 3},
//             delay: 0.2,
//             ease: "power1.inOut"
//         }
//     }
// });

// tl.addLabel("start")
//     .from('.card', {
//         opacity: 1,
//         y:80
//     })