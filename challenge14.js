var x=70;
var y=70;

// Create circles of Specific Color, Size and speeds 
function Circle(color, radius,dx,dy,x,y)
{
	this.canvas  = canvas;
	this.context = canvas.getContext('2d');
	this.radius  = radius;
	this.x = x;
	this.y  = y;
	this.dx  = dx;
	this.dy  = dy;
	this.color   = color;
}

Circle.prototype.Create = function ()
{
	this.context.beginPath();
	this.context.fillStyle = this.color;
	this.context.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
	this.context.fill();
}

function grow() {
	for (i in circles) {
		circles[i].radius += circles[i].dx;
	}
	draw();
}
  
function draw(){
  context.clearRect(0,0, 500,500);
  for (i in circles) {
	circles[i].Create();
  }
}

function addCircle(x,y){
	circles.push(new Circle('#0000'+(8+(Math.random()*7<<0)).toString(16) + '0', 40,0.25,3,x,y));
	draw();
}

function initCanvas()
 {
  canvas  = document.getElementById("myCanvas")
  canvas.onclick=function(e) {
	if (e.pageX || e.pageY) { 
	  x = e.pageX;
	  y = e.pageY;
	}
	else { 
	  x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
	  y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
	} 

	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	addCircle(x,y);
  };
  context = canvas.getContext('2d');
  circles = [];
  setInterval(grow,20);
}