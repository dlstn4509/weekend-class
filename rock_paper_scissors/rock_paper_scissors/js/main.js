const comList = document.querySelectorAll('#computer li')
const humanList = document.querySelectorAll('#human li')
const resultCover = document.querySelector('#resultCover')
const btnRestart = document.querySelector('#btnRestart')


let count = 0;
let num = 0;
let clearId = setInterval(comChoice, 30);
let clearCount;

function comChoice() {
	for (let i = 0; i < 3; i++) {
		comList[i].style.display = 'none';
	}

	num += 1;
	comList[num % 3].style.display = 'block';
};

// humanList[0].classList.add('off')
// humanList[1].classList.add('off')
// humanList[2].classList.add('off')


function onoff(isState) {
	if (isState) {
		for (let i = 0; i < 3; i++) {
			humanList[i].classList.add('off')
		}
	} else {
		for (let i = 0; i < 3; i++) {
			humanList[i].classList.remove('off')
		}
	}
}
for (let i = 0; i < 3; i++) {
	humanList[i].addEventListener("click", () => {
		onoff(true)
		clearInterval(clearId);
		const resultList = document.querySelector('#resultList')
		if (i === num % 3) {
			console.log('비김')
			resultList.innerHTML += '<li class="draw"><span>D</span></li>'
		} else if ((i === 0 && num % 3 === 1) || (i === 1 && num % 3 === 2) || (i === 2 && num % 3 === 0)) {
			console.log('졌음')
			resultList.innerHTML += '<li class="lose"><span>L</span></li>'
		} else {
			console.log('이김')
			resultList.innerHTML += '<li class="win"><span>W</span></li>'
		}
		clearCount = setTimeout(() => {
			clearId = setInterval(comChoice, 30)
			onoff(false)
		}, 1000)

		count++
		console.log("🚀 ~ count", count)
		if (count >= 3) {
			clearTimeout(clearCount)
			resultCover.classList.remove('off')
		}
	})
}

btnRestart.addEventListener('click', () => {
	resultCover.classList.add('off')
	// clearId = setInterval(comChoice, 30);
	clearCount = setTimeout(() => {
		clearId = setInterval(comChoice, 30)
		onoff(false)
	}, 1000)
	count = 0;
	resultList.innerHTML = ''
})

/* 	for (let i=0; i<3; i++) {
		humanList[i].addEventListener("click", () => {
			comChoiceE = num%3;
			clearInterval(clearId);
			if (i===0) {
				if (comChoiceE === 0) console.log('비김')
				else if(comChoiceE === 1) console.log('졌음')
				else console.log('이김')
			}
			if (i===1) {
				if (comChoiceE === 0) console.log('이김')
				else if(comChoiceE === 1) console.log('비김')
				else console.log('졌음')
			}
			if (i===2) {
				if (comChoiceE === 0) console.log('졌음')
				else if(comChoiceE === 1) console.log('이김')
				else console.log('비김')
			}
		})
	} */
// humanList[0].addEventListener("click", clickRock)
// humanList[1].addEventListener("click", clickPaper)
// humanList[2].addEventListener("click", clickScissors)

function clickRock() {
	clearInterval(clearId);
	comChoiceE = num % 3;
	if (comChoiceE === 0) {
		console.log('비김')
	} else if (comChoiceE === 1) {
		console.log('졌음')
	} else {
		console.log('이김')
	}
}

function clickPaper() {
	clearInterval(clearId);
	comChoiceE = num % 3;
	if (comChoiceE === 0) {
		console.log('이김')
	} else if (comChoiceE === 1) {
		console.log('비김')
	} else {
		console.log('졌음')
	}
}

function clickScissors() {
	clearInterval(clearId);
}