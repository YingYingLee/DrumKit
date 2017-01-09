
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if (!audio) {
		return;
	}
	audio.volume = 0.5;
	audio.currentTime = 0;	//從頭開始
	audio.play();
	
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName !== "transform") {
		return;
	}
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
