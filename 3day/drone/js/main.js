// .from( target:[ Object | Array | String ], vars:Object, position:[ Number | String ] ) : self

gsap.defaults({ease: 'power4.out'})

Splitting()
const timeline = gsap.timeline()
timeline.from('.right', {width: 0, ease: 'power4.inOut', duration: 1})
	.from('.product img', {scale: 0, ease: 'back.out', duration: 1})
	.from('.logo', {background: '#fff', duration: 0.5})
	.from('.logo .char', {x: 20, opacity: 0 })
	.from('.next', {x: 20, opacity: 0 })
	.from('.product-title .char', {x: 20, opacity: 0 })
	.from('.desc .char', {x: 20, opacity: 0 })
	.from('#price', {x: 20, opacity: 0, })
	.from('.btn', {x: 20, opacity: 0, })
	.from('.watch', {x: 100, opacity: 0 })
	.from('.cart', {opacity: 0, })
	.from('.right-sidebar li', {x: 20, opacity: 0 })
	.from('.media li', {x: 20, opacity: 0 })
