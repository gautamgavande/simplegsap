var tl = gsap.timeline()

tl.

from("h2", {
        y: 30,
        opacity: 0,
        duration: 3,
        stagger: 1,
        ease: "Expo.easeInOut",
    })
    .from("#f", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "Expo.easeInOut",
    })
    .from("#img", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: .2,
        ease: "Expo.easeInOut",
    })
    .from("#b", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: .2,
        ease: "Expo.easeInOut",

    })