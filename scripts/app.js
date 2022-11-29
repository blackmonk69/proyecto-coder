// const tl=gsap.timeline ({defaults:{ease:'power2.out'}});
// //  tl.to (".slider",{y:"-100%",duration:1.3});
// //  tl.to (".intro",{y:"0%",duration:1.3},"-=1");
// tl.fromTo(".texto-background",{opacity:0},{opacity:1,duration:10})
const tl=gsap.timeline ({defaults:{ease:'power2.out'}});
 tl.to (".slider",{y:"-100%",duration:1.3});
 tl.to (".texto-background",{y:"0%",duration:1.3},"-=1");
 tl.fromTo(".texto-background",{opacity:0},{opacity:1,duration:7},"-=1")