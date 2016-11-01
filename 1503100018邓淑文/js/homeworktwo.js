window.onload=function() {
    var canvas=document.getElementById("canvas");////准备工作
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext("2d");

    function square(cxt, x, y,l) {//定义一个函数名为square的函数，各参数为cxt,x,y,l
        cxt.beginPath();
        cxt.moveTo(x, y);
        cxt.lineTo(x-l, y);
        cxt.lineTo(x -l*3/2, y-(Math.sqrt(3)*l)/2);
        cxt.lineTo(x-l,y-Math.sqrt(3)*l);//正六边形各点的值
        cxt.lineTo(x, y-Math.sqrt(3)*l);
        cxt.lineTo(x +l/2,y-(Math.sqrt(3)/2)*l);
        cxt.lineTo(x,y);

        cxt.strokeStyle = "#624";//定义线宽和颜色
        cxt.lineWidth = 5;

        cxt.stroke();//确认画图


    }

    square(context,400,400,100);//调用函数
}