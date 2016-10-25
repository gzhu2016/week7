/**
 * Created by Administrator on 2016/10/25 0025.
 */
window.onload=function() {
    var canvas=document.getElementById("canvas");
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext("2d");

    context.beginPath();
    context.rect(0,0,800,600);
    context.fillStyle="#AA9033";

    context.fill();



    context.beginPath();
    for(var  i=0;i<=20;i++){
        pic(context,200+10*i,100+10*i,400-20*i,400-20*i);
        pict(context,205+10*i,105+10*i,390-20*i,390-20*i);
    }

    context.beginPath();
    context.rect(395,295,5,5);
    context.fillStyle="black";
    context.lineWidth=5;

    context.fill();
    context.stroke();}


    function pict(cxt,x,y,w,h){
        cxt.beginPath();
        cxt.rect(x,y,w,h);

        cxt.lineWidth=5;
        cxt.strokeStyle="black";

        cxt.stroke;
    }

    function pic(cxt,x,y,w,h){
        cxt.beginPath();
        cxt.rect(x,y,w,h);

        cxt.lineWidth=5
        cxt.strokeStyle="white";

        cxt.stroke();
    }
