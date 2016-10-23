/**
 * Created by 嘉茹 on 2016/10/23.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    function Hexagon(cxt,x,y,z)          //x，y为六边形的起点，z为六边形边长的一半。
    {
        cxt.beginPath();
        cxt.moveTo(x,y);
        cxt.lineTo(x+2*z,y);
        cxt.lineTo(x+3*z,y+1.73*z);
        cxt.lineTo(x+2*z,y+2*1.73*z);
        cxt.lineTo(x,y+2*1.73*z);
        cxt.lineTo(x-z,y+1.73*z);
        cxt.closePath();

        cxt.fillStyle="#4F9D9D"
        cxt.lineWidth=5;
        cxt.strokeStyle="#95CACA";
        cxt.fill();
        cxt.stroke();
    }
    Hexagon(context,300,200,100);







};