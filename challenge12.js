var context;
  var x=70;
  var y=70;

// Create circles of Specific Color, Size and speeds 
function Circle(color, radius,dx,dy)
{
	this.canvas  = canvas;
	this.context = canvas.getContext('2d');
	this.radius  = radius;
	this.x = Math.random()*(500-radius)+radius;
	this.y  = Math.random()*(500-radius)+radius;
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
Circle.prototype.Bounce = function ()
{
	if (this.x >= (canvas.width - this.radius) || this.x <= this.radius) this.dx *= -1;
	if (this.y >= (canvas.height - this.radius) || this.y <= this.radius) this.dy *= -1; 
}
  
function draw(){
  context.clearRect(0,0, 500,500);
console.log(circles);
  for (i in circles) {
	  circles[i].x += circles[i].dx;
	  circles[i].y += circles[i].dy;
		// Boundary checking
	  circles[i].Bounce();
	  circles[i].Create();
  }
}

function initCanvas()
 {
  canvas  = document.getElementById("myCanvas")
  context = canvas.getContext('2d');
    // Create an array to store the circles info
  circles = [];
  circles.push(new Circle('#555', 40,2,3)); 
  circles.push(new Circle('#4DA400', 40,-2,-3));
  setInterval(draw,20);
}