var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

var car_width = 75;
var car_height = 100;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var car_x = 10
var car_y = 10

//Set initial position for a car image.

function add() {
	backgroundImgTag = new Image();
	backgroundImgTag.onload = uploadBackground;
	backgroundImgTag.src = background_image;

	carImgTag = new Image();
	carImgTag.onload = uploadgreencar;
	carImgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundImgTag , 0 , 0 ,canvas.width , canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(carImgTag , car_x , car_y ,car_width , car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{ 
	if( car_y >= 0 ){
	car_y = car_y-5;
	uploadBackground();
	uploadgreencar();
	//Define function to move the car upward
}
}

function down()
{
	if( car_y <= 400 ){
		car_y = car_y+5;
		uploadBackground();
		uploadgreencar();
		//Define function to move the car upward
	}
}

function left()
{
	if( car_x >= 0 ){
		car_x = car_x-5;
		uploadBackground();
		uploadgreencar();
		//Define function to move the car upward
	}
}

function right()
{
	if( car_x <= 800 ){
		car_x = car_x+5;
		uploadBackground();
		uploadgreencar();
		//Define function to move the car upward
	}
}
