var cosA = [];
var sinA = [];

const radians = deg => (deg * Math.PI) / 180.0;

for (i = 0; i < 360; i++) {
	cosA.push(Math.cos(radians(i)));
	sinA.push(Math.sin(radians(i)));
};