window.onload=function() {
    var canvas=document.getElementById("canvas");
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext("2d");

    function square(cxt, x, y,l) {
        cxt.beginPath();
        cxt.moveTo(x, y);
        cxt.lineTo(x-l, y);
        cxt.lineTo(x -l*3/2, y-(Math.sqrt(3)*l)/2);
        cxt.lineTo(x-l,y-Math.sqrt(3)*l);
        cxt.lineTo(x, y-Math.sqrt(3)*l);
        cxt.lineTo(x +l/2,y-(Math.sqrt(3)/2)*l);
        cxt.lineTo(x,y);

        cxt.strokeStyle = "#624";
        cxt.lineWidth = 5;

        cxt.stroke();


    }

    square(context,400,400,100);
}