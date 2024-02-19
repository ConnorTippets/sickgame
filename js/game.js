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
	
	for (i = 0; i < 10; i ++) {
		var key = ["W", "A", "S", "D", "SPACE", "SHIFT", "LEFT", "UP", "RIGHT", "DOWN"][i];
		keys[key] = kd[key].isDown() && !(document.pointerLockElement == null);
	};
	
	var turning = (keys["RIGHT"] - keys["LEFT"]) * turn;
	var looking = (keys["UP"] - keys["DOWN"]) * turn;
	var flying = (keys["SPACE"] - keys["SHIFT"]) * walk;
	var moving = (keys["W"] - keys["S"]);
	var strafing = (keys["A"] - keys["D"]);
	
	player.a += turning;
	if (player.a < 0) {
		player.a += 360;
	}
	else if (player.a > 359) {
		player.a -= 360;
	}
	
	var dx = sinA[Math.floor(player.a)]*walk;
	var dy = cosA[Math.floor(player.a)]*walk;
	player.x += dx * moving;
	player.y += dy * moving;
	
	player.x += dx * strafing;
	player.y -= dy * strafing;
	
	player.l += looking;
	
	player.z -= flying;
};

function drawWall(x1, x2, b1, b2) {
	dyb = b2-b1;
	dx = x2- x1;
	xs = x1;
	if (dx == 0) { dx = 1; }
	
	for (x=x1; x < x2; x ++) {
		y1 = dyb*(x-xs+0.5)/dx+b1
		pixel(x, y1, "rgb(245 213 71)");
	};
};

function draw() {
	var cos = cosA[Math.floor(player.a)];
	var sin = sinA[Math.floor(player.a)];
	
	//offset wall points by player
	var x1 = 40 - player.x;
	var y1 = 10 - player.y;
	var x2 = 40 - player.x;
	var y2 = 290 - player.y;
	
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
	wz.push(0 - player.z + ((player.l*wy[0])/32));
	wz.push(0 - player.z + ((player.l*wy[1])/32));
	
	//screen x and screen y position
	var sx = [], sy = [];
	sx.push(wx[0]*200/wy[0]+(width/2));
	sy.push(wz[0]*200/wy[0]+(height/2));
	
	sx.push(wx[1]*200/wy[1]+(width/2));
	sy.push(wz[1]*200/wy[1]+(height/2));
	
	//if (sx[0] > 0 && sx[0] < width && sy[0] > 0 && sy[0] < height &&
	//	sx[1] > 0 && sx[1] < width && sy[1] > 0 && sy[1] < height) {
			drawWall(sx[0], sx[1], sy[0], sy[1]);
	//}
};

function start() {
	player = new Player(70, -110, 20);
};

function step(delta) {
	fill("rgb(20 70 160)")
	handle(delta);
	draw();
};