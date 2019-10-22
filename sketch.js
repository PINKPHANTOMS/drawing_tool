let width = 780
let height = 690
let a = 0
let b = 0
let c = 0
let sq_mode = false
let paint_mode = false
let circle_mode = false
let radius_x = 5
let radius_y = 5
let angle = 10
let increment = false
let decrement = false
let pencil = false
let spray = false
let z = 1
let gocrazy = false
let gostupid = false
let move = false
let xoff = 0.0

function setup(){

	let canvas = createCanvas(width, height)
	canvas.parent("p5")

	rect(0, 0, width, height)
	angleMode(DEGREES)

	background(0,0,0)
	stroke(0, 250, 0)
	fill(0,0,0)
	rect(120, 120, 610, 530)

}



function draw(){


	let xval = mouseX
	let yval = mouseY

	// line(mouseY, mouseY, mouseX-10, mouseY+10)
	// line(mouseX, mouseY, mouseX+10, mouseY+10)

	// boundary bars

	stroke(0, 245, 0)
	strokeWeight(2)
	fill(0,0,0)

	rect(0, 0, width, 70)
	rect(0, 0, 70, height)

	strokeWeight(2)

push()
	// up arrow
	if(increment == true){
		stroke(255, 0, 255)
	}else{
		stroke(0, 255, 0)
	}
	line(2, 77, 7, 64)
	line(13, 77, 7, 64)
pop()
	// down arrow
	push()
	if(decrement == true){
		stroke(255, 0, 255)
	}else{
		stroke(0, 255, 0)
	}

	line(20, 64, 27, 77)
	line(27, 77, 32, 63)
pop()

push()
	// circle select
	if(circle_mode == true){
	if(a==0 && b==0 && c==0){
		stroke(255, 255, 255)

		strokeWeight(2)

	}else{
		strokeWeight(0)
				fill(a,b,c)

	}
	}
	if(circle_mode == false){
		fill(0,0,0)
		strokeWeight(2)

	}

	ellipse(15,92,21,21)
	pop()

push()
	// square select
	if(sq_mode == true){
			if(a==0 && b==0 && c==0){
				stroke(255, 255, 255)
			strokeWeight(2)


	}else{
		strokeWeight(0)
		fill(a,b,c)

	}}
	if(sq_mode == false){
		fill(0,0,0)
		strokeWeight(2)
	}
	rect(28,83,18,18)
pop()
push()
	// pencil select
	if(pencil == true){
	if(a==0 && b==0 && c==0){
	strokeWeight(2)
	stroke(255, 255, 255)


	}else{
		strokeWeight(0)
		fill(a, b, c)
	}}
	if(pencil == false){
		fill(0,0,0)
		strokeWeight(2)
	}
	textSize(17)
	text('pencilboi', 2, 340)
pop()
push()
	// spray select
	if(spray == true){
	if(a==0 && b==0 && c==0){
	stroke(255, 255, 255)

	strokeWeight(2)

	}else{
		strokeWeight(0)
		fill(a, b, c)
	}}
	if(spray == false){
		fill(0,0,0)
		strokeWeight(2)
	}
	textSize(18)
	text('sprayboi', 2, 360)
pop()

push()
	// spray select
	if(gocrazy == true){
	if(a==0 && b==0 && c==0){
	stroke(255, 255, 255)

	strokeWeight(2)

	}else{
		strokeWeight(0)
		fill(a, b, c)
	}}
	if(gocrazy == false){
		fill(0,0,0)
		strokeWeight(2)
	}
	textSize(15.5)
	text('go crazy?', 2, 380)
pop()


push()
	// spray select
	if(gostupid == true){
	if(a==0 && b==0 && c==0){
	stroke(255, 255, 255)

	strokeWeight(2)

	}else{
		strokeWeight(0)
		fill(a, b, c)
	}}
	if(gostupid == false){
		fill(0,0,0)
		strokeWeight(2)
	}
	textSize(14.8)
	text('go stupid?', 2, 400)
pop()


	// color select

	// red
	stroke(0,250,0)
	fill(a, 0, 0,)
	rect(5, 123, 20, 200)

	// blue
	fill(0, b, 0)
	rect(25, 123, 20, 200)

	// green
	fill(0, 0, c)
	rect(45, 123, 20, 200)



	// start painting

	if(paint_mode == true){

	// inside of canvas?
	if(mouseX > 120 && mouseY > 120 && mouseX < 730 && mouseY < 648){
		fill(a, b, c)
		stroke(a, b, c)

		if(circle_mode == true){
		ellipse(mouseX, mouseY, radius_x, radius_x)

}
		if(sq_mode == true){


		rect(xval, yval, radius_x, radius_x)
}
		if(pencil == true){

		line(pmouseX, pmouseY, mouseX, mouseY)
}
		if(spray == true){
				let z = random(-10, 10)
		point(mouseX + random(-z, z), mouseY + random(-z, z))
}
		if(gocrazy == true){
			mouseX = random(pmouseX, width)
			mouseY = random(pmouseY, height)
			a = random(0, 255)
			b = random(0, 25)
			c = random(0, 255)
			sq_mode = true
			circle_mode = true
			spray = true
			pencil = true
			spray = true
			radius_x = random(0, 25)
			radius_y = random(0, 25)

}
if(gostupid==true){
	gocrazy = true
	  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  line(n, mouseX, n, pmouseY + 150);
}
}

}}

function mouseWheel(event){

	print(event.delta)

	if(mouseX > 6 && mouseX < 25 && mouseY > 123 && mouseY < 323){
	a += event.delta
	if(a >= 255){
		a=255
	}
	if(a <= 0){
		a=0
	}
}
	if(mouseX > 26 && mouseX < 45 && mouseY > 123 && mouseY < 323){
	b += event.delta

		if(b >= 255){
		b=255
	}
	if(b <= 0){
		b=0
	}
}
	if(mouseX > 46 && mouseX < 65 && mouseY > 123 && mouseY < 323){
	c += event.delta
		if(c >= 255){
		c=255
	}
	if(c <= 0){
		c=0
	}
	return false
}
}
function mousePressed(){

	// increase radius

	if(mouseX > 0 && mouseX < 13 && mouseY > 62 && mouseY < 76){
		increment = true
		radius_x += 1
		radius_y += 1
	}

	// decrease radius

	if(mouseX > 19 && mouseX < 31 && mouseY > 62 && mouseY < 76){
		decrement = true
		radius_x -= 1
		radius_y -= 1
	}
	// square mode

	if(mouseX > 28 && mouseX < 46 && mouseY > 83 && mouseY < 203){
		circle_mode = false
		sq_mode = true
		pencil = false
		spray = false
		gocrazy = false
		gostupid = false


	}

	// circle mode

	if(mouseX > 4 && mouseX < 25 && mouseY > 81 && mouseY < 203){
		circle_mode = true
		sq_mode = false
		pencil = false
		spray = false
		gocrazy = false
		gostupid = false

	}

	// pencilboi

	if(mouseX > 2 && mouseX < 68 && mouseY > 327 && mouseY < 340){
		circle_mode = false
		sq_mode = false
		pencil = true
		spray = false
		gocrazy = false
		gostupid = false


	}

		// spray

	if(mouseX > 2 && mouseX < 68 && mouseY > 349 && mouseY < 360){
		circle_mode = false
		sq_mode = false
		pencil = false
		spray = true
		gocrazy = false
		gostupid = false
	}


	if(mouseX > 2 && mouseX < 68 && mouseY > 372 && mouseY < 381){
		circle_mode = false
		sq_mode = false
		pencil = false
		spray = false
		gocrazy = true
		gostupid = false
	}


	if(mouseX > 2 && mouseX < 68 && mouseY > 388 && mouseY < 399){
		circle_mode = false
		sq_mode = false
		pencil = false
		spray = false
		gocrazy = false
		gostupid = true
	}


	paint_mode = true


	print(mouseX, mouseY)
}

function mouseReleased(){

	decrement = false
	increment = false
	paint_mode = false

}

function Clicked(){


}

function colorBlue(){

	fill(0, 0, 255, 100)

}

function colorRed(){

	fill(255, 0, 0, 100)
	
}

// function shapeCircle(){

// 	circle_mode = true

// }