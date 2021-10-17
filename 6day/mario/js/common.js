let period = 0
setInterval(function() {
  period += 0.05
  gsap.set('#main .universe span', {x: Math.sin(period) * 100})
}, 1000)