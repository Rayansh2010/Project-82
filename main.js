var mouse_event = "empty";
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var line_width = 1;
var lastposition_x, lastposition_y, currentposition_x, currentposition_y;
var color = "black";
var radius = 0;

canvas.addEventListener("mouseup", Funcmouseup);

function Funcmouseup(e){
    mouse_event = "mouseUp";
}

canvas.addEventListener("mousedown", FuncmouseDown);

function FuncmouseDown(e){
    mouse_event = "mouseDown";

    color = document.getElementById("colorinput").value;
    line_width = document.getElementById("widthinput").value;
    radius = document.getElementById("radiusinput").value;
}

canvas.addEventListener("mouseleave", FuncmouseLeave);

function FuncmouseLeave(e){
    mouse_event = "mouseLeave";
}

canvas.addEventListener("mousemove", FuncmouseMove);

function FuncmouseMove(e) {
    currentposition_x = e.clientX - canvas.offsetLeft;
    currentposition_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(currentposition_x, currentposition_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function eraseeverything(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}