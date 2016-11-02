var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

function drawPath(x, y, n, r) {
    var i, ang;
    ang = Math.PI * 2 / n ;

    context.fillStyle = "white";
    context.strokeStyle = "black";
    context.lineWidth = 30;
    context.translate(x, y);
    context.moveTo(0, -r);
    context.beginPath();
    for (i = 0; i < n; i++) {
        context.rotate(ang);
        context.lineTo(0, -r);
    }
    context.closePath();
    context.stroke();
    context.fill();

}

drawPath(300,300,10,150);