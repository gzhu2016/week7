window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);


    context.beginPath();
    context.moveTo(320, 50);
    context.lineTo(230, 50 + 90 * Math.sqrt(3));
    context.lineTo(50, 50 + 90 * Math.sqrt(3));
    context.lineTo(140, 50 + 180 * Math.sqrt(3));
    context.lineTo(50, 50 + 270 * Math.sqrt(3));
    context.lineTo(230, 50 + 270 * Math.sqrt(3));
    context.lineTo(320, 50 + 360 * Math.sqrt(3));
    context.lineTo(410, 50 + 270 * Math.sqrt(3));
    context.lineTo(590, 50 + 270 * Math.sqrt(3));
    context.lineTo(500, 50 + 180 * Math.sqrt(3));
    context.lineTo(590, 50 + 90 * Math.sqrt(3));
    context.lineTo(410, 50 + 90 * Math.sqrt(3));
    context.lineTo(320, 50);
    context.closePath();
    context.lineWidth = 4;
    context.strokeStyle = "red";
    context.fillStyle = "yellow";
    context.stroke();
    context.fill();
}
