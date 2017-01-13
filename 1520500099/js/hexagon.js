window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.fillStyle="white";
    context.fillRect(0,0,canvas.width,canvas.height);

    //x,y为起笔坐标，w为正六边形边长，p为线宽，linecolor为线条颜色,innercolor为填充颜色
    function hexagon(ctx,x,y,w,p,linecolor,innercolor){
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+w,y);
        ctx.lineTo(x+3/2*w,y+Math.sqrt(3)*w/2);
        ctx.lineTo(x+w,y+Math.sqrt(3)*w);
        ctx.lineTo(x,y+Math.sqrt(3)*w);
        ctx.lineTo(x-w/2,y+Math.sqrt(3)*w/2);
        ctx.lineTo(x,y);
        ctx.closePath();
        ctx.lineWidth = p;
        ctx.strokeStyle =linecolor;
        ctx.fillStyle =innercolor ;
        ctx.stroke();
        ctx.fill();
    }
    hexagon(context,200,200,200,5,"red","yellow");
};