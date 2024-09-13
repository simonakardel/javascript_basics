/*▪ Define the Car class:
▪ Create a class named Car.
▪ Add a constructor that accepts make, model, and year as parameters and initializes these
properties.
▪ Add Methods:
▪ getCarInfo method: This method should return a string containing the car's make, model, and
year.
▪ start method: This method should set a property called isRunning to true and return a
string indicating the car has started.
▪ stop method: This method should set the isRunning property to false and return a string
indicating the car has stopped.
▪ Create Instances and Test Methods:
▪ Create two instances of the Car class with different make, model, and year values.
▪ Call the getCarInfo, start, and stop methods on these instances and print the results to verify
that everything works as expected.*/

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    getCarInfo() {
        return `${this.make} ${this.model} ${this.year}`;
    }

    start() {
        this.isRunning = true;
        return `${this.make} ${this.model} has started`;
    }

    stop() {
        this.isRunning = false;
        return `${this.make} ${this.model} has stopped`;
    }
}

// Tests

const car1 = new Car('Toyota', 'Camry', 2022);
console.log(car1.getCarInfo());
console.log(car1.start());
console.log(car1.stop());

const car2 = new Car('Honda', 'Civic', 2021);
console.log(car2.getCarInfo());
console.log(car2.start());
console.log(car2.stop());
