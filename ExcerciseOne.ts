// Первая задача ----------------------

class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Я животное'
    }
}

//const tiger = new Animal('Тигр', 7)

//tiger.speak()

// Вторая задача ----------------------

class Cat extends Animal {
    override speak() {
        return 'Мяу'
    }
}

//const barsik = new Cat('Барсикъ', 5)

//barsik.speak()

// Третья задача ----------------------

class Counter {
    private _value: number;


    constructor(_value: number) {
        this._value = _value;
    }

    get value() {
        return this._value
    }

    set value(point: number) {
        this._value = point + 1
    }

    plusOne() {
        return this._value += 1
    }

    minusOne() {
        return this._value -= 1
    }
}

//const value = new Counter(4)

//console.log(value.minusOne())


// Четвертая задача ----------------------

abstract class Shape{
    getArea(a:number, b:number){
        return a * b
    }
}

class Rectangle extends Shape{


    getArea(a:number, b:number){
        return a * b
    }
}

class Circle extends Shape{
    
    override getArea(a:number){
        return 3.14 * Math.pow(a, 2)
    }
}

//const rectangle = new Rectangle()

//console.log(rectangle.getArea(5, 5))

//const circle = new Circle()

//console.log(circle.getArea(5))


// Пятая задача (не решено) ----------------------

//class Engine {
//     nick: string;

//     constructor(nick: string){
//         this.nick = nick
//     }
// }

// class Wheel extends Engine{
//     value: number

//     constructor(value: number){
//       super()
//         this.value = value
//     }
// }

// class Car extends Wheel{
    
// }
