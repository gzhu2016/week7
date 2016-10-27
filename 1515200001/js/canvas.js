window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

    context.fillStyle="white";
    context.fillRect(0,0,canvas.width,canvas.height);


    function  rectangle(cxt,x,y,w,h,p,linecolor,innercolor){
        cxt.beginPath();
        cxt.moveTo(x,y);
        cxt.lineTo(x,y+h);
        cxt.lineTo(x+w,y+h);
        cxt.lineTo(x+w,y);
        cxt.lineTo(x,y);
        cxt.closePath();
        cxt.lineWidth=p;
        cxt.strokeStyle=linecolor;
        cxt.fillStyle=innercolor;
        cxt.stroke();
        cxt.fill();

    }
    for(i=0;i<=20;i++) {
        rectangle(context, 100 + 10 * i, 100 + 10 * i, 400 - 20 * i, 400 - 20 * i, 5, "white", "white");
        rectangle(context, 105 + 10 * i, 105 + 10 * i, 390 - 20 * i, 390 - 20 * i, 5, "black", "black");
    }

};