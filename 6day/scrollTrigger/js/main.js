gsap.to('#red', {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: "#red"
})
gsap.to('#blue', {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: {
    markers: true,
    trigger: "#blue",
    // scrub: 1,
    // pin: true,
    toggleActions: 'play pause reverse reset',
    start: "top center",
    end: "bottom top",
  }
})
gsap.to('#green', {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: "#green"
})