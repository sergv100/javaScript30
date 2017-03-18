"use strict";

function playSound(e) {
	const audio = document.querySelector( 'audio[data-key="' + e.keyCode + '"]' ),
		  key   = document.querySelector( '.drum-kit__item[data-key="' + e.keyCode + '"]' );

	if( !audio ) return;

	audio.currentTime = 0; // rewind to the start
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if( e.propertyName !== 'transition' ) return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum-kit__item');
keys.forEach( key => key.addEventListener('transitionend', removeTransition) );

window.addEventListener( 'keydown', playSound );







