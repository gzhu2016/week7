window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "yellow";
    context.lineWidth = 5;
    var height = 200 * Math.sin(Math.PI / 3);
    context.moveTo(400, 200);
    context.lineTo(300, height + 200);
    context.lineTo(500, height + 200);
    context.lineTo(400, 200);

    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "aqua";
    context.lineWidth = 5;
    var height = 200 * Math.sin(Math.PI / 3);
    context.moveTo(400, 200 + 4 / 3 * height);
    context.lineTo(300, (height + 200) - height * 2 / 3);
    context.lineTo(500, (height + 200) - height * 2 / 3);
    context.lineTo(400, 200 + 4 / 3 * height);

    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.lineWidth = 5;
    var height = 200 * Math.sin(Math.PI / 3);
    var circle = {
        x: 400,
        y: (height + 200) - height * 1 / 3,
        r: height / 3,
    };
    context.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    context.fill();
    context.closePath();
};