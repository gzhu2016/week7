window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext("2d");
     drawPath(300, 300, 10, 150);
}

function drawPath(x, y, n, r) {
    var i, ang;
    ang = Math.PI * 2 / n ;
    var context = canvas.getContext("2d");

    context.strokeStyle = "black";
    context.lineWidth = 10;
    context.translate(x, y);
    context.moveTo(0, -r);
    context.beginPath();
    for (i = 0; i < n; i++) {
        context.rotate(ang);
        context.lineTo(0, -r);
    }
    context.closePath();
    context.stroke();


}

