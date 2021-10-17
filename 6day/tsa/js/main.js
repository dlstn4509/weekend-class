Splitting();
gsap.defaults({
  duration: 1,
  ease: 'power4',
})
const mainVisualTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.section01',
    start:'top top' ,
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: true,
  }
});
const mainVisualLine = CSSRulePlugin.getRule('.tsa .section01 .txt01:after')
mainVisualTimeLine.from('.section01 .txt01 .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05,
})
.from(mainVisualLine, {
  cssRule: {
    scaleX: 0,
  }
})
.from('.section01 .txt02 .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05,
})
.from('.section01 .txt0301', {
  x: 100,
  opacity: 0,
})
.from('.section01 .txt0302', {
  x: -100,
  opacity: 0,
})
.from('.section01 .txt0303', {
  x: 100,
  opacity: 0,
})
.from('.section01 .txt04', {
  scake: 0,
  opacity: 0,
});

const section02TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.section02',
    start:'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: true,
  }
});
section02TimeLine.from('.section02 .title', {
  backgroundColor: 'transparent',
})
.from('.section02 .title .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section02 .mainTxt .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section02 .circleList li', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section02 .cduBox', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})



const section03TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.section03',
    start:'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: true,
  }
});
section03TimeLine.from('.section03 .title', {
  backgroundColor: 'transparent',
})
.from('.section03 .title .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section03 .mainTxt .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section03 .list li .listBox', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})

const section04TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.section04',
    start:'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: true,
  }
});
section04TimeLine.from('.section04 .title', {
  backgroundColor: 'transparent',
})
.from('.section04 .title .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section04 .mainTxt .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section04 .list li .txtBox', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section04 .list li .imgBox', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})

const section05TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.section05',
    start:'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: true,
  }
});
section05TimeLine.from('.section05 .title', {
  backgroundColor: 'transparent',
})
.from('.section05 .title .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section05 .mainTxt .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section05 .list', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})

const section06TimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.section06',
    start:'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    markers: true,
  }
});
section06TimeLine.from('.section06 .title', {
  backgroundColor: 'transparent',
})
.from('.section06 .mainTxt', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section06 .subTxt .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section06 .txtDash .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section06 .img', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section06 .shortcut .char', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})
.from('.section06 .btns', {
  x: 100,
  opacity: 0,
  stagger: 0.05
})