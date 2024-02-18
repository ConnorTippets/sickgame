var username;

function startGame() {
	username = document.getElementById("username").value;
	document.getElementById("starter").remove();
	
	const canvas = document.createElement("canvas");
	canvas.setAttribute("width", window.innerWidth);
	canvas.setAttribute("height", window.innerHeight);
	canvas.setAttribute("style", "position:absolute; left:0%; top:0%");
	
	document.getElementsByTagName("body")[0]
		.appendChild(canvas);
	
	const cont = canvas.getContext("2d");
	init(username, cont);
};