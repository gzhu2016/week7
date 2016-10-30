window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	// 绘制六芒星并上色
	context.beginPath();
	context.moveTo(400, 200)
	context.lineTo(400 - 100 * Math.sqrt(3), 500)
	context.lineTo(400 + 100 * Math.sqrt(3), 500)
	context.closePath();
	context.fill();
	context.stroke();

	context.beginPath();
	context.moveTo(400 - 100 * Math.sqrt(3), 300)
	context.lineTo(400 + 100 * Math.sqrt(3), 300)
	context.lineTo(400, 600)
	context.closePath();
	context.fill();
	context.stroke();

	context.fillStyle = "black";
	context.lineWidth = 5;
	context.strokeStyle = "black";

	// 绘制正六边形
	function polygon(cxt, n, x, y, r, angle, counterclockwise) { // 以(x,y)为中心，半径为r的正n边形
		var angle = angle || 0; //第一个点（最上面的顶点）偏离中心点的弧度
		var counterclockwise = counterclockwise || false; //angle偏离是顺时针还是逆时针
		cxt.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle)); //确立第一个点  
		var delta = 2 * Math.PI / n; //相邻两个顶点之间的夹角  
		for (var i = 0; i < n; i++) { //其他顶点  
			angle += counterclockwise ? -delta : delta; //角度调整  
			cxt.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
		}
		cxt.closePath();
	}

	context.beginPath();
	polygon(context, 6, 400, 1200, 200, Math.PI / 6);
	context.fillStyle = '#1cb463';
	context.fill();
	context.stroke;

	// 绘制魔性图形
	context.beginPath();
	for (var i = 0; i <= 20; i++) {
		drawWhiteRect(context, 200 + 10 * i, 1800 + 10 * i, 400 - 20 * i, 400 - 20 * i);
		drawBlackRect(context, 205 + 10 * i, 1805 + 10 * i, 390 - 20 * i, 390 - 20 * i);
	}

	context.beginPath();
	context.rect(400, 2000, 5, 5);
	context.fillStyle = "black";
	context.lineWidth = 5;
	context.fill();
	context.stroke();

	function drawBlackRect(cxt, x, y, width, height) {
		cxt.beginPath();
		cxt.rect(x, y, width, height);
		cxt.lineWidth = 5;
		cxt.strokeStyle = "black";
		cxt.stroke();
	}

	function drawWhiteRect(cxt, x, y, width, height) {
		cxt.beginPath();
		cxt.rect(x, y, width, height);
		cxt.lineWidth = 5;
		cxt.strokeStyle = "white";
		cxt.stroke();
	}
}