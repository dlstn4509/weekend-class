let grid = null;
$(window).mousemove(function(e) {
  // console.log(e.clientX)
  // console.log(e.clientY)
  gsap.to('.cursor', {
    left: e.clientX,
    top: e.clientY,
    duration: 0.3
  })
})

$('.filter li').click(function() {
  console.log($(this).data('filter-word'))
  return false;
})

$('.filter li').mouseenter(function() {
  $('.cursor .txt').text('click')
  gsap.killTweensOf('.cursor')
  gsap.to('.cursor', {
    width: 80,
    height: 80,
    backgroundColor: '#f00',
    ease: 'elastic',
    duration: 1,
  })
})

$('.filter li').mouseleave(function() {
  $('.cursor .txt').text('')
  gsap.killTweensOf('.cursor')
  gsap.to('.cursor', {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    ease: 'power4',
    duration: .25,
  })
})

$.ajax({
  url: 'typo.json',
  success: function (data) {
    const typoList = data.typoList
    const imageFolder = data.imageFolder
    typoList.forEach(function(v) {
      $('#works .grid').append(`
      <li class="item ${ v.category }">
				<a href="" data-fancybox="${v.category}" data-src="${imageFolder}${v.img}"  data-caption="${v.title}">
					<div class="imgBox">
						<img src="${imageFolder}${v.img}" alt="">
					</div>
					<div class="infoBox">
						<h2>${ v.title }</h2>
						<p class="desc">${ v.desc }</p>
						<p class="point">${ v.point }</p>
					</div>
				</a>
			</li>
      `)
    })

    Fancybox.bind("[data-fancybox]", {});
    imagesLoaded( document.querySelector('body'), function() {
      var elem = document.querySelector('.grid');
      new Isotope( elem, {
        itemSelector: '.item',
        layoutMode: 'fitRows'
      });
    });

  }
});

$('#works .grid').mouseenter(function() {
  $('.cursor .txt').text('VIEW')
  gsap.killTweensOf('.cursor')
  gsap.to('.cursor', {
    width: 80,
    height: 80,
    backgroundColor: '#f00',
    ease: 'elastic',
    duration: 1,
  })
})

$('#works .grid').mouseleave(function() {
  $('.cursor .txt').text('')
  gsap.killTweensOf('.cursor')
  gsap.to('.cursor', {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    ease: 'power4',
    duration: .25,
  })
})

