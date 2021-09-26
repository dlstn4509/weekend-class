$('#gnb .list li').on('mouseenter', function () {
	$(this).find('.depth02').stop().slideDown(500)
})

$('#gnb .list li').on('mouseleave', function () {
	$(this).find('.depth02').stop().slideUp(500)
})

$('.btnSitemap').on('click', function () {
	$('body').addClass('all')
	allMenuTimeline.play()
})
$('#allMenu .btnClose').click(function () {
	$('body').removeClass('all')
	allMenuTimeline.reverse()
})

const allMenuTimeline = gsap.timeline({paused: true})
allMenuTimeline.to('#allMenu', {background: 'rgba(0, 0, 0, 1)', opacity: 1, duration: 1.5})
								.from('#allMenu .list > li', {opacity: 0, y: -100, stagger: 0.1, ease: 'power4', duration: .1})


								
$(window).scroll(function() {
	const st = $(this).scrollTop()
	if(st > 0) {
		if(!$('#header').hasClass('on') && !$('.btnTop').hasClass('on') && !($('#mainLink').hasClass('on')) && !$('.pagination').hasClass('on') && !$('.iconScroll').hasClass('on')) {
			$('#header').addClass('on')
			$('.btnTop').addClass('on')
			$('#mainLink').addClass('on')
			$('.iconScroll').addClass('on')
			$('.pagination').addClass('on')
		}
	}
	else {
		$('#header').removeClass('on')
		$('.btnTop').removeClass('on')
		$('#mainLink').removeClass('on')
		$('.iconScroll').removeClass('on')
		$('.pagination').removeClass('on')
	}
})