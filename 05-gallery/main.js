const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	panels.forEach( panel => panel.classList.remove('open') );
	this.classList.add('open');
}

function toggleActive() {
	panels.forEach( panel => panel.classList.remove('open-active') );
	this.classList.add('open-active');
}

panels.forEach( panel => panel.addEventListener('click', toggleOpen ) );
// panels.forEach( panel => panel.addEventListener('transitionend', toggleActive ) );