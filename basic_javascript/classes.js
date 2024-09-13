class Cat {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getData() {
        return { name: this.name, color: this.color, breed: this.breed };
    }

    changeName(newName) {
        this.name = newName;
    }
}

// Tests

const myCat = new Cat('Henry', 'orange', 'Persian');

const { name, color, breed } = myCat.getData();
console.log(name, color, breed);
myCat.changeName('Billi');
console.log("My cat's name changed to " + myCat.name);
