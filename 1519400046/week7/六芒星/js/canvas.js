window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "yellow";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    var height = 300 * Math.sin(Math.PI / 3);
    context.moveTo(400, 150);
    context.lineTo(250, height + 150);
    context.lineTo(550, height + 150);
    context.lineTo(400, 150);

    context.stroke();
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "aqua";
    context.strokeStyle = "black";
    context.lineWidth = 1;
    var height = 300 * Math.sin(Math.PI / 3);
    context.moveTo(400, 150 + 4 / 3 * height);
    context.lineTo(250, (height + 150) - height * 2 / 3);
    context.lineTo(550, (height + 150) - height * 2 / 3);
    context.lineTo(400, 150 + 4 / 3 * height);

    context.stroke();
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "white";
    context.lineWidth = 5;
    var height = 300 * Math.sin(Math.PI / 3);
    var circle = {
        x: 400,
        y: (height + 150) - height * 1 / 3,
        r: height / 3,
    };
    context.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "aqua";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    var height = 80 * Math.sin(Math.PI / 3);
    context.moveTo(400, 280);
    context.lineTo(360, height + 280);
    context.lineTo(440, height + 280);
    context.lineTo(400, 280);

    context.stroke();
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "yellow";
    context.strokeStyle = "red";
    context.lineWidth = 1;
    var height = 80* Math.sin(Math.PI / 3);
    context.moveTo(400, 280 + 4 / 3 * height);
    context.lineTo(360, (height + 280) - height * 2 / 3);
    context.lineTo(440, (height + 280) - height * 2 / 3);
    context.lineTo(400, 280 + 4 / 3 * height);

    context.stroke();
    context.fill();
    context.closePath();
    context.beginPath();

    context.fillStyle = "white";
    context.lineWidth = 5;
    var height = 80 * Math.sin(Math.PI / 3);
    var circle = {
        x: 400,
        y: (height + 280) - height * 1 / 3,
        r: height / 3,
    };
    context.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
    context.fill();
    context.closePath();

};