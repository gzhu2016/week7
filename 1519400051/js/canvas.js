window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 2800;
    var context = canvas.getContext("2d");
    //绘画一个宽800，高2400，颜色为#66ccff的矩形
    context.beginPath();
    context.rect(100 , 0 , 800 , 2400);
    context.fillStyle= "#66ccff";
    context.fill();

    //绘画黑白相间的矩形
    context.beginPath();
    for(var i = 0 ; i <= 40 ; i++)
    {
        drawWhiteRect(context , 100 + 10 * i , 100 + 10 * i ,800 - 20 * i , 800 - 20 * i );
        drawBlackRect(context , 105 + 10 * i , 105 + 10 * i ,790 - 20 * i , 790 - 20 * i );
    }

    //黑白相间矩形中心的黑点
    context.beginPath();
    context.rect(497.5 , 497.5 , 5 , 5 );
    context.fillStyle="black";
    context.lineWidth=5;
    context.fill();
    context.stroke();

    //红色五角星
    drawstar5(context , 300 , 150 , 500 , 1300 );
    //绘画六芒星
    for( var j = 0 ; j < 80 ; j+=4 ){
        drawstar6white(context , 300 - j * 2 , 150 - j * 2 , 500 , 2000 );
        drawstar6black(context , 300 - j * 4 , 150 - j * 4 , 500 , 2000 );

    }
}

//定义绘画一个白色矩形的函数
function drawWhiteRect(cxt , x,y,width,height)
{
    cxt.beginPath();
    cxt.rect(x,y,width,height);
    cxt.lineWidth=5;
    cxt.strokeStyle="#fff";

    cxt.stroke();
}
//定义绘画一个黑色矩形的函数
function drawBlackRect(cxt , x , y , width , height)
{
    cxt.beginPath();
    cxt.rect(x,y,width,height);
    cxt.lineWidth=5;
    cxt.strokeStyle="#000";

    cxt.stroke();
}
//定义绘画红色五角星的函数
function drawstar5( cxt , R , r , x , y ){
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18 + 72 * i ) / 180 * Math.PI) * R + x , -Math.sin((18 + 72 * i) / 180 * Math.PI) * R + y);
        cxt.lineTo(Math.cos((54 + 72 * i ) / 180 * Math.PI) * r + x , -Math.sin((54 + 72 * i) / 180 * Math.PI) * r + y);
    }
    cxt.closePath();
    cxt.fillStyle = "#f00";
    cxt.lineWidth= 1 ;
    cxt.fill();
    cxt.stroke();
}
//定义绘画白色六芒星的函数
function drawstar6black( cxt , R , r , x , y ){
    cxt.beginPath();
    for (var i = 0; i < 6; i++) {
        cxt.lineTo(Math.cos( ( 0 + 60 * i ) / 180 * Math.PI) * r + x , -Math.sin( ( 0 + 60 * i) / 180 * Math.PI) * r + y);
        cxt.lineTo(Math.cos( ( 30 + 60 * i ) / 180 * Math.PI) * R + x , -Math.sin(( 30 + 60 * i) / 180 * Math.PI) * R + y);
    }
    cxt.closePath();
    cxt.fillStyle = "#000";
    cxt.fill();
    cxt.stroke();
}
//定义绘画黑色六芒星的函数
function drawstar6white( cxt , R , r , x , y ){
    cxt.beginPath();
    for (var i = 0; i < 6; i++) {
        cxt.lineTo(Math.cos( ( 0 + 60 * i ) / 180 * Math.PI) * r + x , -Math.sin( ( 0 + 60 * i) / 180 * Math.PI) * r + y);
        cxt.lineTo(Math.cos( ( 30 + 60 * i ) / 180 * Math.PI) * R + x , -Math.sin(( 30 + 60 * i) / 180 * Math.PI) * R + y);
    }
    cxt.closePath();
    cxt.fillStyle = "#fff";
    cxt.fill();
    cxt.stroke();
}