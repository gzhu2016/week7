window.onload = function () {                               <!--保证html加载完后再执行函数,html运行速度比js快-->
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(300,600);
    context.lineTo(500,100);
    context.strokeStyle="red";
    context.lineWidth=5;
    context.closePath();
    context.fillStyle="red"
    context.fill();
    context.stroke();
    context.beginPath();
    context.moveTo(100,0);
    context.lineTo(300,500);
    context.lineTo(500,0);
    context.strokeStyle="yellow";
    context.lineWidth=5;
    context.stroke();
    function rectangle(x,y,width,height){
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(x+width,y);
        context.lineTo(x+width,y+height);
        context.lineTo(x,y+height);
        context.closePath();
        context.strokeStyle="blue";
        context.lineWidth=1;
        context.stroke();
    }
    rectangle(0,0,10,20);
    rectangle(500,100,250,30);
    context.beginPath();
    context.moveTo(515,115);
    context.lineTo(815,115);
    context.strokeStyle="blue";
    context.lineWidth=30;
    context.stroke();

    context.fillStyle="red";
    context.fillRect(0,0,canvas.width,canvas.height);

    context.strokeRect(100,100,300,300);
};