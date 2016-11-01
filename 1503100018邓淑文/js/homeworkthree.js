/**
 * Created by Administrator on 2016/10/25 0025.
 */
window.onload=function() {
    var canvas=document.getElementById("canvas");
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext("2d");//准备工作

    context.beginPath();
    context.rect(0,0,800,600);//创建一个起点为（0，0），宽为800，高为600的矩形
    context.fillStyle="black";//设置填充颜色为黑色

    context.fill();//确认填充



    context.beginPath();
    for(var  i=0;i<20;i++){//循环语句，表示循环20下
        pic(context,200+10*i,100+10*i,400-20*i,400-20*i);//调用函数pic

    }


    context.stroke();}

    function pic(cxt,x,y,w,h){//定义一个函数名为pict的函数，各参数为cxt,x,y,w,h
        cxt.beginPath();
        cxt.rect(x,y,w,h);//创建一个起点为（x,y），宽为w，高为h的矩形

        cxt.lineWidth=5;
        cxt.strokeStyle="white";//设置线宽和线条颜色为白

        cxt.stroke();
    }


