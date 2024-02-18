var ctx, username;
var start, prev;
var x = 0;

function init(username, cont) {
	ctx = cont;
	username = username;
	prev = window.performance.now();
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
};

function main() {
	now = window.performance.now();
	const delta = (now - prev) / 16;
	
	loop(delta);
	
	prev = now
	window.requestAnimationFrame(main);
};