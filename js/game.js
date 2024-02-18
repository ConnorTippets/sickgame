var ctx, username;
var start, prev;
var x = 0;
var keys = [];

document.onkeydown = (event) => {
	if (keys.indexOf(event.key) < 0 && document.pointerLockElement) {
		keys.push(event.key);
	};
};

document.onkeyup = (event) => {
	keys.splice(keys.indexOf(event.key), 1);
}

function init(username, cont) {
	ctx = cont;
	username = username;
	prev = window.performance.now();
	
	ctx.canvas.addEventListener("click", async () => {
		await ctx.canvas.requestPointerLock();
	});
	
	window.requestAnimationFrame(main);
};

function pixel(x, y, style) {
	ctx.fillStyle = style;
	ctx.fillRect(parseInt(x)*8, parseInt(y)*8, 8, 8);
};

function fill(style) {
	ctx.fillStyle = style;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

function loop(delta) {
	fill("rgb(50 50 50)");
	pixel(x, 1, "rgb(255 0 0)");
	x = x + delta;
	console.log(keys);
};

function main() {
	now = window.performance.now();
	const delta = (now - prev) / 16;
	
	loop(delta);
	
	prev = now
	window.requestAnimationFrame(main);
};