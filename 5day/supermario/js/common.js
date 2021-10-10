let amount = 0;
const zAmount = 5000;
const wheelAmount = zAmount/2;
$.ajax({
	url: 'mario.json',
	success: function (data) {
		const marioArray = data.mario
		const total = marioArray.length
		$.each(marioArray, function(i, item) {
			$('#menu .list').append(`<li id="onClick" data-idx=${i}>${item.title}</li>`)
			$('#main .marioList').append(
				`
				<li style="transform:translateZ(${i * -5000}px); z-index: ${total-i}">
					<div class="mario">
						<img src="${item.img}" alt="${item.title}">
					</div>
					<div class="txt">
						<h2 class="title">${item.title}</h2>
						<p>${item.desc}</p>
						<a href="${item.link}">MORE</a>
					</div>
					<div class="bg" style="background-image: ${item.bg}"></div>
				</li>
				`
			)
		})

		$(window).on('mousewheel', function(e) {
			const wheel = e.originalEvent.deltaY
			if(wheel < 0) { // 밑으로
				amount -= wheelAmount
			}
			else { // 위로
				amount += wheelAmount
			}
			$('#main .marioList li').each(function(i, item) {
				gsap.to(item, {z:amount - i*zAmount});
			})
		})




		var click = document.querySelectorAll('#onClick')

		for(var i = 0; i < click.length; i++) {
			click[i].addEventListener("click", function() {
				console.log(this)
			});
		}
		
		






	}
})


