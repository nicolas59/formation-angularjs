interface Person {
	name: string,
	firstname: string,
	age: number
}

class Student implements Person{
	constructor(public name, public firstname, public age){

	}

	sayHello() : string{
		return "Hello" + this.firstname;
	}

	static build(name:string, firstname:string, age:number){
		return new Student(name, firstname, age);
	}
}

function greeter(person) {
    return "Hello, " + person.name;
}

var user = "Jane User";

var me = {name:"Rousseau", firstname:"Nicolas", age:"34"};
document.body.innerHTML = greeter(me);


var me2 = new Student("Rousseau","Nicolas", 34);

module Shape {

	export class Point {
	
		constructor(public posX, public posY){}
	}

	export interface Shape {
		position : Point;
	    color: string;

	    draw();

	    tracking();
	}

	export class Square implements Shape {
	   canvas;
	   constructor(public position, public color, public sideLength:number){

	   }
	   draw() {
	   		if(this.canvas){
	   			document.body.removeChild(this.canvas);
	   		}

	   		//if(this.canvas == null){
	   			this.canvas = document.createElement("canvas");
	   			document.body.appendChild(this.canvas);	
	   		//}
	   		let context = this.canvas.getContext("2d"); 
	   		context.fillRect(this.position.posX, this.position.posY, 
	   			this.sideLength, 
	   			this.sideLength);
	   		
	   }

	   tracking() {
	   		let _this = this;
	   		window.addEventListener("mousemove",
	   			( e : MouseEvent)  => {
	   				console.log(e);
	   				_this.position = new Point(e.clientX - _this.canvas.offsetLeft, e.clientY - _this.canvas.offsetTop);
	   				_this.draw();
	   			});
	   }
	}

}



var square = new Shape.Square(new Shape.Point(50, 50), "blue", 26);
square.color = "blue";
square.draw();
square.tracking();

let square2 = new Shape.Square(new Shape.Point(75, 75), "blue", 40);
square2.color = "blue";
square2.draw();
square2.tracking();


