/**
 * Created by ZGR on 2016/10/18.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");


    //六芒星
    var H1=Math.sqrt(200*200-100*100);

    context.beginPath();
    context.arc(200,200,(2/3)*H1,0,Math.PI*2,true);
    context.closePath();
    context.strokeStyle="white";
    context.fillStyle="black";
    context.lineWidth=5;
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(200,200);
    context.moveTo(200,200-(2/3)*H1);
    context.lineTo(200+100,200+(1/3)*H1);
    context.lineTo(200-100,200+(1/3)*H1);
    context.closePath();
    context.strokeStyle="white";
    context.lineWidth=5;
    context.stroke();

    context.beginPath();
    context.moveTo(200,200);
    context.moveTo(200-100,200-(1/3)*H1);
    context.lineTo(200+100,200-(1/3)*H1);
    context.lineTo(200,200+(2/3)*H1);
    context.closePath();
    context.strokeStyle="white";
    context.lineWidth=5;
    context.stroke();

    //正六边形
    var H2=Math.sqrt(100*100-50*50)
    context.beginPath();
    context.moveTo(600,200);
    context.moveTo(600-100,200);
    context.lineTo(600-50,200-H2);
    context.lineTo(600+50,200-H2);
    context.lineTo(600+100,200);
    context.lineTo(600+50,200+H2);
    context.lineTo(600-50,200+H2);
    context.closePath();
    context.strokeStyle="black";
    context.lineWidth=5;
    context.stroke();

    //魔性图形
    function DrawBlackRect(cxt,x,y,L,W)
    {
        cxt.beginPath();
        cxt.rect(x,y,L,W);
        cxt.closePath();
        cxt.lineWidth=5;
        cxt.strokeStyle="black";
        cxt.stroke();
    }
    function DrawWhiteRect(cxt,x,y,L,W)
    {
        cxt.beginPath();
        cxt.rect(x, y, L, W);
        cxt.closePath();
        cxt.lineWidth=5;
        cxt.strokeStyle="white";
        cxt.stroke();
    }

    for(var i=0; i<=20; i++)
    {
        DrawWhiteRect(context, 200+10*i, 350+10*i, 400-20*i, 400-20*i);
        DrawBlackRect(context, 205+10*i, 355+10*i, 390-20*i, 390-20*i);
    }
    context.beginPath();
    context.rect(395,545,10,10);
    context.closePath();
    context.fillStyle="black";
    context.lineWidth=5;
    context.fill();
    context.stroke();

}
