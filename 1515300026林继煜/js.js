/**
 * Created by lenovo on 2016/10/22.
 */
function draw(cxt,x,y,width,height,fillcolor,bordercolor)
{
    cxt.beginPath();
    cxt.moveTo(x,y);
    cxt.lineTo(x+width,y);
    cxt.lineTo(x+width/2,y+height);
    cxt.lineTo(x,y);
    cxt.closePath();

    cxt.fillStyle=fillcolor;
    cxt.strokeStyle=bordercolor;

    cxt.fill();
    cxt.stroke();

}
function draw2(cxt,x,y,width,height,fillcolor,bordercolor)
{
    cxt.beginPath();
    cxt.moveTo(x,y);
    cxt.lineTo(x+width/2,y+height);
    cxt.lineTo(x-width/2,y+height);
    cxt.lineTo(x,y);
    cxt.closePath();

    cxt.fillStyle=fillcolor;
    cxt.strokeStyle=bordercolor;

    cxt.fill();
    cxt.stroke();

}
function six(cxt,x,y,long,fillcolor,bordercolor)
{
    cxt.beginPath();
    cxt.moveTo(x,y);
    cxt.lineTo(x+long,y);
    cxt.lineTo(x+long*(3/2),y+long*0.5*Math.sqrt(3));
    cxt.lineTo(x+long,y+long*Math.sqrt(3));
    cxt.lineTo(x,y+long*Math.sqrt(3));
    cxt.lineTo(x-long/2,y+long*0.5*Math.sqrt(3));
    cxt.lineTo(x,y);
    cxt.closePath();

    cxt.fillStyle=fillcolor;
    cxt.strokeStyle=bordercolor;

    cxt.fill();
    cxt.stroke();
}
function drawrect(cxt,x,y,width,height,fillcolor,bordercolor)
{
    cxt.beginPath();
    cxt.rect(x,y,width,height);
    cxt.strokeStyle=bordercolor;
    cxt.fillStyle=fillcolor
    cxt.fill();
    cxt.stroke();
}