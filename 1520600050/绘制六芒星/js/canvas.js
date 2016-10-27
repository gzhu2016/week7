/**
 * Created by 嘉茹 on 2016/10/23.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

  function Drawsix(cxt,x,y){

      cxt.beginPath();
      cxt.moveTo(y,y);                 //绘制六芒星的起点
      cxt.lineTo(y+3*x,200+3*1.73*x);
      cxt.lineTo(y+6*x,y);
      cxt.closePath();                //绘制第一个三角形
      cxt.moveTo(y+3*x,y-1.73*x);
      cxt.lineTo(y,y+2*1.73*x);
      cxt.lineTo(y+6*x,y+2*1.73*x);
      cxt.closePath();     //绘制第二个三角形
      cxt.strokeStyle="#003D79";
      cxt.fillStyle ="white";
      cxt.lineWidth=6;
      cxt.fill();
      cxt.stroke();
  }
    Drawsix(context,50,200);          //六芒星的绘制








};