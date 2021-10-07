import { Point } from './point';

// function log(message){
//     console.log(message);
// }
// var message = "hello world";
// log(message);

// function numbers(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// numbers();


// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, 'a', false]; // not prefered but can be used
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let bgColor = Color.Blue;


// Type Assertions

// we will get intellisense here 
// let message = 'abc';
// let result = message.endsWith('c');

// but not here
// let message;
// message = 'abc';
// let result = message.

// solution 1
// let message;
// message = 'abc';
// let result = (<string>message).endsWith('c');

// solution 2
// let message;
// message = 'abc';
// let result = (message as string).endsWith('c');


// Arrow Functions

// let log = function(message) {
//     console.log(message);
// }

// let doLog = (message) => console.log(message);


// Custom Types and Inline annotaions

// not really recommended

// let drawPoint = (x, y, a, b, c, d) => {
//     //...
// }

// solution 1 not really recomended

// let drawPoint = (point: {x: number, y: number}) => {
//     //...
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

// solution 2 

// interface Point {
//     x: number,
//     y: number
// }

// let drawPoint = (point: Point) => {
//     //...
// }

// drawPoint({
//     x: 1,
//     y: 2
// })


// Cohesion Principle

// class Point {
//     x: number;
//     y: number;
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }
//     getDistance(another:Point) {
//         //...
//     }
// }

// // let point: Point;
// let point = new Point();
// point.x = 1,
// point.y = 2,
// point.draw();


// Constructor

// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//         this.x = x,
//         this.y = y
//     }
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }
//     getDistance(another:Point) {
//         //...
//     }
// }

// let point = new Point(1, 2);
// point.draw();


// Note!!!!: On other object oriented languages such as c# java etc., you can make more than one construct but 
// in typescript you can't.
// Solution to this problem -> make variables optional using ? (Question mark)

// class Point {
//     x: number;
//     y: number;
//     constructor(x?: number, y?: number) { // here
//         this.x = x,
//         this.y = y
//     }
//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }
//     getDistance(another:Point) {
//         //...
//     }
// }

// let point = new Point();
// point.draw();


// Access Modifiers There are 3 in typescript private, public, protected => Default public

// class Point {

//     // private x: number;
//     // private y: number;
//     // constructor(x?: number, y?: number) { // here
//     //     this.x = x,
//     //     this.y = y
//     // }

//     //    ^
//     //    |

//     // Typescript feature it will do everything we did before this code
//     constructor(private _x?: number, private _y?: number) {

//     }

//     // constructor(public x?: number, public y?: number) {

//     // }

//     // not necessary usage of access modifier

//     // public draw() {
//     //     console.log('X: ' + this.x + ', Y: ' + this.y)
//     // }

//     draw() {
//         console.log('X: ' + this._x + ', Y: ' + this._y)
//     }

//     // getX() {
//     //     return this.x;
//     // }

//     // setX(value) {
//     //     if (value < 0){
//     //         throw new Error('Value cannot be less than 0');
//     //     }
//     //     this.x = value;
//     // }

//     get x() {
//         return this._x
//     }

//     set x(value) {
//         if (value < 0){
//             throw new Error('Value cannot be less than 0');
//         }
//         this._x = value;
//     }
// }

// let point = new Point(1, 2);
// let x = point.x;
// point.x = 10;
// point.draw();


// Modules

let point = new Point(1, 2);
point.draw();