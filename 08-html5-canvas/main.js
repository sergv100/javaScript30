const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
const inputs = document.querySelectorAll('.editor input');
const clearBtn = document.getElementById('clear');
const editor = document.querySelector('.editor');

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

ctx.strokeStyle = '#ffc600';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let isDrawing = false;

let lastX = 0;
let lastY = 0;

function draw(e) {
	if(!isDrawing) return;

	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	[lastX, lastY] = [e.offsetX, e.offsetY];

}

function getSettings() {
	ctx.lineWidth = this.value;
	ctx.strokeStyle = this.value;
}

function clearBoard() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

clearBtn.addEventListener('click', clearBoard);

inputs.forEach( input => input.addEventListener('change', getSettings) );
inputs.forEach( input => input.addEventListener('mousemove', getSettings) );

window.addEventListener('resize', () => {
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
});


