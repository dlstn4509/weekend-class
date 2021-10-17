Splitting();
$(document).ready(function() {
	$('#main').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
      console.log(origin.index)
      console.log(destination.index)
      console.log(direction) // down / up
      /* if(destination.index === 0) {
        mainVisualTimeLine.restart()
      }
      else if(destination.index === 1) {
        businessTimeLine.restart()
      }
      else if(destination.index === 2) {
        portfolioTimeLine.restart()
      } */

      switch (destination.index) {
        case 0 :
          mainVisualTimeLine.restart()
          break;
        case 1 :
          businessTimeLine.restart()
          break;
        case 2 : 
          portfolioTimeLine.restart()
          break;
      }
    },
	});
});

$('#gnb .list > li').mouseenter(function() {
  $('#header').addClass('on')
  const tx = $(this).offset().left+$(this).width()/2;
  gsap.to('#gnb .circle', { left: tx })
})
$('#header').mouseleave(function() {
  $('#header').removeClass('on')
})

gsap.defaults({
  ease: 'power4',
  duration: 1,
})

const mainVisualLine = CSSRulePlugin.getRule("#mainVisual .txtBox strong::after")
const mainVisualTimeLine = gsap.timeline()
mainVisualTimeLine.from('#mainVisual .txtBox h2 .char', {
  opacity: 0,
  x: 100,
  stagger: 0.05,
})
.from('#mainVisual .txtBox p .char', {
  opacity: 0,
  x: 100,
  stagger: 0.05,
}, '-= 1')
.from(mainVisualLine, {
  cssRule: { scaleX: 0 }
}, '-= 1')

const businessTimeLine = gsap.timeline()
const businessLine = CSSRulePlugin.getRule("#mainVisual .txtBox strong::after")
businessTimeLine.from('#business .txtBox h2 .char', {
  opacity: 0,
  x: 100,
  stagger: 0.05,
})
.from('#business .txtBox p .char', {
  opacity: 0,
  x: 100,
  stagger: 0.05,
}, '-= 1')
.from(businessLine, {
  cssRule: { scaleX: 0 }
}, '-= 1')
.from('#business .iconBox ul li', {
  opacity: 0,
  y: 100,
  stagger: 0.05,
}, '-= 1')

const portfolioTimeLine = gsap.timeline()
const portfolioLine = CSSRulePlugin.getRule("#portfolio .txtBox strong::after")
portfolioTimeLine.from('#portfolio .txtBox h2 .char', {
  opacity: 0,
  x: 100,
  stagger: 0.05,
})
.from('#portfolio .txtBox p .char', {
  opacity: 0,
  x: 100,
  stagger: 0.05,
}, '-= 1')
.from(portfolioLine, {
  cssRule: { scaleX: 0 }
}, '-= 1')