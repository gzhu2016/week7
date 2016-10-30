//黑白相间的正方形
window.onload=function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.fillStyle="white";
    context.fillRect(0,0,canvas.width,canvas.height);
   for(i=20;i>=0;i--) {
       context.beginPath();
       context.moveTo(400 - i * 10-2, 400 - i * 10-2);
       context.lineTo(400 + i * 10+2, 400 - i * 10-2);
       context.lineTo(400 + i * 10+2, 400 + i * 10+2);
       context.lineTo(400 - i * 10-2, 400 + i * 10+2);
       context.closePath();
       context.strokeStyle = "black";
       context.lineWidth = 5;
       context.stroke();
   }
};