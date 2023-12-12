class Shapes{
    constructor()
    {

    }
}

class Circle extends Shapes{
    constructor(authorName, title, text, createdOn) {
        super(authorName, text, createdOn);
        this.title = title;
        this.comments = [];

        printMetaData() {
            console.log(`Created by ${this.authorName} on ${this.createdOn}`);
          }
}

class Square extends Shapes{
    constructor(authorName, title, text, createdOn) {
        super(authorName, text, createdOn);
        this.title = title;
        this.comments = [];
}

class Triangle extends Shapes{
    constructor(authorName, title, text, createdOn) {
        super(authorName, text, createdOn);
        this.title = title;
        this.comments = [];
}

class Validate {}

Validate.prototype.isPassword = function () {};

// TODO: Export the Validate class from this file.

module.exports = Validate;

// A constructor Arithmetic is created.
function Arithmetic() {};

// Constructor Arithmetic is given a sum method that returns two numbers added together.
Arithmetic.prototype.sum = (a, b) => {
  return a + b
};

// Constructor Arithmetic is given a difference method that returns two numbers subtracted.
Arithmetic.prototype.difference = (a, b) => {
  return a - b
};

// Constructor Arithmetic is given a product method that returns two numbers multiplied together.
Arithmetic.prototype.product = (a, b) => {
  return a * b
};

// Constructor Arithmetic is given a quotient method that returns two numbers divided.
Arithmetic.prototype.quotient = (a, b) => {
  return a / b
};

// Constructor Arithmetic is exported from the file.
module.exports = Arithmetic;
