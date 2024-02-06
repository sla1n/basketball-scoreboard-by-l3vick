let guestScore = document.getElementById('score-guest')
let homeScore = document.getElementById('score-home')

let guestScoreNumber = { value: 0}
let homeScoreNumber = { value: 0}

function increaseBy1(a, b){
	a.value++
	b.textContent = a.value
}

function increaseBy2(a, b){
	a.value += 2
	b.textContent = a.value
}

function increaseBy3(a, b){
	a.value += 3
	b.textContent = a.value
}

function newGame(a, b){
	a.value = 0
	b.textContent = a.value
}


function checkLeader(){
	if(guestScoreNumber.value > homeScoreNumber.value){
		document.getElementById('guest-header').style.color = '#38BDF8';
		document.getElementById('home-header').style.color = '#EEEEEE';
	}
	else if (homeScoreNumber.value > guestScoreNumber.value){
		document.getElementById('home-header').style.color = '#38BDF8';
		document.getElementById('guest-header').style.color = '#EEEEEE';
	}
	else {
		document.getElementById('guest-header').style.color = '#EEEEEE';
		document.getElementById('home-header').style.color = '#EEEEEE';
	}
	
}


document.getElementById('home-1').onclick = function() {increaseBy1(homeScoreNumber, homeScore)}
document.getElementById('home-2').onclick = function() {increaseBy2(homeScoreNumber, homeScore)}
document.getElementById('home-3').onclick = function() {increaseBy3(homeScoreNumber, homeScore)}

document.getElementById('guest-1').onclick = function() {increaseBy1(guestScoreNumber, guestScore)}
document.getElementById('guest-2').onclick = function() {increaseBy2(guestScoreNumber, guestScore)}
document.getElementById('guest-3').onclick = function() {increaseBy3(guestScoreNumber, guestScore)}

document.getElementById('game-home').onclick = function() {newGame(homeScoreNumber, homeScore)}
document.getElementById('game-guest').onclick = function() {newGame(guestScoreNumber, guestScore)}


document.onclick = function() {checkLeader()}


