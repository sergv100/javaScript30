const secondHand = document.querySelector('.second-hand');
	  minsHand   = document.querySelector('.mins-hand');
   	  hourHand   = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ( seconds * 6 );
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = ( mins * 6 );
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hour = now.getHours();
	const hourDegrees = ( hour * 30 + ( mins / 2 ) );
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	console.log(hour, minsDegrees);
}

setInterval(setDate, 1000);