var username, player;

class Player {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.a = 0;
		this.l = 0;
	}
}

function handle(delta) {
	const turn = 2;
	const walk = 4;
	if (keys.includes("ArrowLeft")) {
		player.a -= turn;
		if (player.a < 0) {
			player.a += 360;
		}
	}
	else if (keys.includes("ArrowRight")) {
		player.a += turn;
		if (player.a > 359) {
			player.a -= 360;
		}
	}
	
	var dx = sinA[Math.floor(player.a)]*walk;
	var dy = cosA[Math.floor(player.a)]*walk;
	
	if (keys.includes("w")) {
		player.x += dx;
		player.y += dy;
	}
	else if (keys.includes("s")) {
		player.x -= dx;
		player.y -= dy;
	};
	
	if (keys.includes("a")) {
		player.x += dx;
		player.y -= dy;
	}
	else if (keys.includes("d")) {
		player.x -= dx;
		player.y += dy;
	};
	
	if (keys.includes("ArrowUp")) {
		player.l -= walk;
	}
	else if (keys.includes("ArrowDown")) {
		player.l += walk;
	};
	
	if (keys.includes(" ")) {
		player.z -= walk;
	}
	else if (keys.includes("Shift")) {
		player.z += walk;
	};
};

function draw() {
	var cos = cosA[Math.floor(player.a)];
	var sin = sinA[Math.floor(player.a)];
	
	//offset wall points by player
	var x1 = 40 - player.x, y1 = 10 - player.y;
	var x2 = 40 - player.x, y2 = 290 - player.y;
	
	//world X position
	var wx = [];
	wx.push(x1*cos-y1*sin);
	wx.push(x2*cos-y2*sin);
	
	//world Y position (depth because Z up apparently)
	var wy = [];
	wy.push(y1*cos+x1*sin);
	wy.push(y2*cos+x2*sin);
	
	//world Z height
	var wz = [];
	wz.push(0 - player.z);
	wz.push(0 - player.z);
	
	//screen x and screen y position
	var sx = [], sy = [];
	sx.push(wx[0]*200/wy[0]+(width/2));
	sy.push(wz[0]*200/wy[0]+(height/2));
	
	sx.push(wx[1]*200/wy[1]+(width/2));
	sy.push(wz[1]*200/wy[1]+(height/2));
	
	if (sx[0] > 0 && sx[0] < width && sy[0] > 0 && sy[0] < height) { pixel(sx[0], sy[0], "rgb(245 213 71)"); }
	if (sx[1] > 0 && sx[1] < width && sy[1] > 0 && sy[1] < height) { pixel(sx[1], sy[1], "rgb(245 213 71)"); }
};

function start() {
	player = new Player(70, -110, 20);
};

function step(delta) {
	fill("rgb(20 70 160)")
	handle(delta);
	draw();
};