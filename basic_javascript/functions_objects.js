const calculator = {
    firstName: 'Simona',
    lastName: 'Kardel',

    printName: function (firstName, lastName) {
        console.log(firstName + ' ' + lastName);
    },
    rectangleArea: function (lenght, width) {
        return lenght * width;
    },
    calculateDistance: function (speed, time) {
        return speed * time;
    },
};

// Tests

calculator.printName('Simona', 'Kardel');
const rectangleArea = calculator.rectangleArea(10, 20);
const distance = calculator.calculateDistance(110, 4);

console.log('You have travelled ' + distance + 'km');
console.log(
    'The rectangle with a width of 10 and a length of 20 has an area of: ' +
        rectangleArea
);
