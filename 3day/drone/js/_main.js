gsap.defaults({
    opacity: 0,
    ease:"power4.inOut",
    duration:1.5
})
var mainTl = gsap.timeline();
mainTl.from(".right", {
    width:0,
})
.from(".product img", {
    scale: 0,
    duration:3,
},0)
.addLabel("product")
.from(".logo", {
    x: -20,
},"-=2")
.from(".next", {
    x: -20,
    duration:1
},"-=0.8")
.from(".watch", {
    x: -20,
    duration:1
},"-=0.8")
.from(".cart",  {
    x: -20,
    duration:1
},"-=0.8")
.from(".product-title", {
    y: 20,
    duration:2
},"-=0.8")
.from(".desc", {
    y: 20,
    duration:2
},"-=1.8")
.from("#price", {
    y: 20,
    duration:2
},"-=1.8")
.from(".btn", {
    y: 20,
    duration:2
},"-=1.8")
.from(".right-sidebar ul li", {
    x: 100,
    duration:2,
    stagger:0.08
},"-=1.8")
.from(".left-bottom",  {
    x: 100,
    duration:2,
},"-=1.8")
.from(".media ul li", {
    x: 100,
    duration:1,
    stagger:0.08
},"product-=1")
