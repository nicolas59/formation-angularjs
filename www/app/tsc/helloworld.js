var Student = (function () {
    function Student(name, firstname, age) {
        this.name = name;
        this.firstname = firstname;
        this.age = age;
    }
    Student.prototype.sayHello = function () {
        return "Hello" + this.firstname;
    };
    Student.build = function (name, firstname, age) {
        return new Student(name, firstname, age);
    };
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.name;
}
var user = "Jane User";
var me = { name: "Rousseau", firstname: "Nicolas", age: "34" };
document.body.innerHTML = greeter(me);
var me2 = new Student("Rousseau", "Nicolas", 34);
var Shape;
(function (Shape) {
    var Point = (function () {
        function Point(posX, posY) {
            this.posX = posX;
            this.posY = posY;
        }
        return Point;
    })();
    Shape.Point = Point;
    var Square = (function () {
        function Square(position, color, sideLength) {
            this.position = position;
            this.color = color;
            this.sideLength = sideLength;
        }
        Square.prototype.draw = function () {
            if (this.canvas) {
                document.body.removeChild(this.canvas);
            }
            //if(this.canvas == null){
            this.canvas = document.createElement("canvas");
            document.body.appendChild(this.canvas);
            //}
            var context = this.canvas.getContext("2d");
            context.fillRect(this.position.posX, this.position.posY, this.sideLength, this.sideLength);
        };
        Square.prototype.tracking = function () {
            var _this = this;
            window.addEventListener("mousemove", function (e) {
                console.log(e);
                _this.position = new Point(e.clientX - _this.canvas.offsetLeft, e.clientY - _this.canvas.offsetTop);
                _this.draw();
            });
        };
        return Square;
    })();
    Shape.Square = Square;
})(Shape || (Shape = {}));
var square = new Shape.Square(new Shape.Point(50, 50), "blue", 26);
square.color = "blue";
square.draw();
square.tracking();
var square2 = new Shape.Square(new Shape.Point(75, 75), "blue", 40);
square2.color = "blue";
square2.draw();
square2.tracking();
