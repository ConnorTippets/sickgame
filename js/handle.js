var ctx, username;
var start, prev;
var x = 0;
var width, height;
var keys = [];

function init(username, cont) {
	ctx = cont;
	username = username;
	prev = window.performance.now();
	
	ctx.canvas.addEventListener("click", async () => {
		await ctx.canvas.requestPointerLock();
	});
	
	start();
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

function main() {
	now = window.performance.now();
	const delta = (now - prev) / 16;
	width = window.innerWidth / 8
	height = window.innerHeight / 8;
	
	kd.tick();
	step(delta, username);
	
	prev = now
	window.requestAnimationFrame(main);
};